import * as mongoose from "mongoose";
import {UserDocument} from "./user.interface";

export interface SchemaDocument extends mongoose.Document {
    user : UserDocument['_id'];
    valid: boolean;
    userAgent: string;
    createDate: Date;
}