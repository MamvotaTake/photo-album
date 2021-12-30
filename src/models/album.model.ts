import * as mongoose from "mongoose";
import {AlbumDocument} from "../interface/album.interface";
import {customAlphabet} from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopkrstuvwxyz0123456789", 10)


const albumSchema = new mongoose.Schema({
    albumId:{
        type: String,
        required: true,
        unique: true,
        default: () => `album_${nanoid()}`
    },
    title: {type: String},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})
const AlbumModel = mongoose.model<AlbumDocument>("Album", albumSchema)

export default AlbumModel