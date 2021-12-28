import * as mongoose from "mongoose";
import {UserDocument} from "./user.interface";
import {AlbumDocument} from "./album.interface";

export interface PhotoDocument extends mongoose.Document{
    user: UserDocument["_id"];
    owner: AlbumDocument["_id"]
    title: string;
    url: string;
    thumbnail: string;
    createdDate: Date;

}