import * as mongoose from "mongoose";
import {AlbumDocument} from "../interface/album.interface";

const albumSchema = new mongoose.Schema({
    title: {type: String},
    owner: {type: String, required: true}
})
const AlbumModel = mongoose.model<AlbumDocument>("Album", albumSchema)

export default AlbumModel