import * as mongoose from "mongoose";
import {UserDocument} from "./user.interface";

export interface AlbumDocument extends mongoose.Document {
    // albumId: string;
    title: string;
    user: UserDocument['_id'];
}