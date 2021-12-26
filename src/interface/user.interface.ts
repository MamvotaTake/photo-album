import * as mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    createdDate: Date;
    comparePassword(candidatePassword: string): Promise<boolean>
}

