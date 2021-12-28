import * as mongoose from "mongoose";
import {PhotoDocument} from "../interface/photo.interface";
import {customAlphabet} from "nanoid";
const nanoid = customAlphabet("abcdefghijklmnopkrstuvwxyz0123456789", 10)


const photoSchema = new mongoose.Schema({
    photoId:{
        type: String,
        required: true,
        unique: true,
        default: () => `product_${nanoid()}`
    },
    albumId:{type: mongoose.Schema.Types.ObjectId, ref: "Album"},
    title:{type: String},
    url:{type: String},
    thumbnail:{type:String},
    ownerId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const PhotoModel = mongoose.model<PhotoDocument>("Photo", photoSchema )

export default PhotoModel