import * as mongoose from "mongoose";
import {SchemaDocument} from "../interface/session.interface";

const sessionSchema = new mongoose.Schema({
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        valid: {type: Boolean, default: true},
        userAgent: {type: String}
})

const SessionModel = mongoose.model<SchemaDocument>('Session', sessionSchema)

export default SessionModel