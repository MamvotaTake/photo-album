import * as mongoose from "mongoose";

export interface AlbumDocument extends mongoose.Document {
    title: string;
    owner: string;
    createdDate: Date;
}