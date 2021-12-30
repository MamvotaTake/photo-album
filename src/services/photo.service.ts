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
    await PhotoModel.aggregate([
        {$group : {_id : "$user", num_user : {$sum : 1}}},
        {$limit: 5},
        {$count: 'photoId'}
    ])

    return PhotoModel.find(query, {}, options);

}


export async function deletePhoto(query: FilterQuery<PhotoDocument>) {
    return PhotoModel.deleteOne(query)
}

