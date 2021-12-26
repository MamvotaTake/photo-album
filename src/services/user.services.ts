import {UserDocument} from "../interface/user.interface";
import {DocumentDefinition} from "mongoose";
import UserModel from "../models/user.model";
import {omit} from "lodash";

export async function createUser(input: DocumentDefinition<Omit<UserDocument, 'createdDate' | "comparePassword">>) {

    try {
        const user = await UserModel.create(input)
        return omit(user.toJSON(), "password")
    } catch (e:any) {
        throw new Error(e)
    }
}