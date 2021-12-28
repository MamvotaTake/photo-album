import {FilterQuery, QueryOptions, UpdateQuery} from "mongoose";
import {AlbumDocument} from "../interface/album.interface";
import AlbumModel from "../models/album.model";

export async function findAlbum(query: FilterQuery<AlbumDocument>){
    return AlbumModel.findOne(query)
}
export async function deleteAlbum(query: FilterQuery<AlbumDocument>) {
    return AlbumModel.deleteOne(query)
}

export async function updateAlbum(
    query: FilterQuery<AlbumDocument>,
    update: UpdateQuery<AlbumDocument>,
    options: QueryOptions) {

    return AlbumModel.updateOne(query, update, options)
}