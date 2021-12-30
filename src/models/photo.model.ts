import * as mongoose from "mongoose";
import {PhotoDocument} from "../interface/photo.interface";
import {customAlphabet} from "nanoid";
const nanoid = customAlphabet("abcdefghijklmnopkrstuvwxyz0123456789", 10)


const photoSchema = new mongoose.Schema({
    photoId:{
        type: String,
        required: true,
        unique: true,
        default: () => `photo_${nanoid()}`
    },
    albumId:{type: Number, ref: "Album"},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    title:{type: String},
    url:{type: String},
    thumbnailUrl:{type:String},

}, {timestamps: true})

const PhotoModel = mongoose.model<PhotoDocument>("Photo", photoSchema )

export default PhotoModel