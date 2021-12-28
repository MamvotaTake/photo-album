import PhotoModel from "../models/photo.model";
import {PhotoDocument} from "../interface/photo.interface";
import {DocumentDefinition, FilterQuery, QueryOptions} from "mongoose";
import {ZodString} from "zod";

export async function loadPhotos(input: { thumbnail: ZodString["_output"]; title: ZodString["_output"]; user: any; url: ZodString["_output"] }) {
    return PhotoModel.create(input)
}

export async function getAllPhotos(query: FilterQuery<PhotoDocument>, options: QueryOptions = {lean: true}) {
    return PhotoModel.find(query, {}, options)
}

export async function deletePhoto(query: FilterQuery<PhotoDocument>) {
    return PhotoModel.deleteOne(query)
}

