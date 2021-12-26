import * as mongoose from "mongoose";
import {PhotoDocument} from "../interface/photo.interface";

const photoSchema = new mongoose.Schema({
    albumId:{type: mongoose.Schema.Types.ObjectId, ref: "Album"},
    title:{type: String},
    url:{type: String},
    thumbnail:{type:String},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const PhotoModel = mongoose.model<PhotoDocument>("Photo", photoSchema )

export default PhotoModel