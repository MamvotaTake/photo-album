import PhotoModel from "../models/photo.model";

import {PhotoDocument} from "../interface/photo.interface";
import {DocumentDefinition, FilterQuery, QueryOptions} from "mongoose";

export async function findPhoto(query: FilterQuery<PhotoDocument>) {
    return PhotoModel.findOne(query)
}

export async function loadPhotos(input: DocumentDefinition<PhotoDocument>) {
    return PhotoModel.create(input)
}

export async function getAllPhotos(query: FilterQuery<PhotoDocument>, options: QueryOptions = {lean: true}) {
    
    // Filtering
    const queryObj = {...query}

    const excludedFields = ['page', 'sort', 'limit', 'fields'];

    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)

    //Limiting
    if (query.fields) {
        const fields = query.fields.split(',').join(' ');
        query.select(fields);
    } else {
        query.select('-__v');
    }
    // Pagination
    const page = query.page * 1 || 1;
    const limit = query.limit * 1 || 100;
    const skip = (page - 1) * limit;

    query.skip(skip).limit(limit);

    if (query.page) {
        const numPhoto = await PhotoModel.countDocuments();
        if (skip >= numPhoto) throw new Error('This page does not exist');
    }

    return PhotoModel.find(JSON.parse(queryStr), {}, options)


}

export async function deletePhoto(query: FilterQuery<PhotoDocument>) {
    return PhotoModel.deleteOne(query)
}

