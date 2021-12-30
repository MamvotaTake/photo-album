import * as mongoose from "mongoose";
import {UserDocument} from "./user.interface";
import {AlbumDocument} from "./album.interface";

export interface PhotoDocument extends mongoose.Document{
    albumId: AlbumDocument["_id"];
    user: UserDocument["_id"];
    title: string;
    url: string;
    thumbnailUrl: string;
    createdDate: Date;

}