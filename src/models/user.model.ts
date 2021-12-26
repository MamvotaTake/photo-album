import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import {UserDocument} from "../interface/user.interface";
import config from "config";

const userSchema = new mongoose.Schema({
    username: {type: String, required:true, unique: true},
    email: {type: String, required:true, unique: true},
    password: {type:String, required:true}

}, {timestamps:true})

userSchema.pre("save", async function(next){
    const user = this as UserDocument

    if (user.isModified("password")){

        const salt = await bcrypt.genSalt(config.get<number>('saltRounds'))

        const hash = bcrypt.hashSync(user.password, salt)

        user.password = hash
        return next()
    }
})

userSchema.methods.comparePassword = async function (candidatePassword: string) {
    const user = this as UserDocument
    return bcrypt.compare(candidatePassword, user.password)
}

const UserModel = mongoose.model<UserDocument>("User", userSchema)

export default UserModel