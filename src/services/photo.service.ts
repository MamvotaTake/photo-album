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
    // await PhotoModel.aggregate([
    //     {
    //         '$limit': 4
    //     }, {
    //         '$count': 'photoId'
    //     }, {
    //         '$group': {
    //             '_id': '$user',
    //             'photoId': {
    //                 '$sum': 1
    //             }
    //         }
    //     }
    // ])

    const {page = 2, limit= 3} = query
    return PhotoModel.find(query, {}, options).limit(limit).skip((page-1)*limit);

}

export async function deletePhoto(query: FilterQuery<PhotoDocument>) {
    return PhotoModel.deleteOne(query)
}

