import {object, string} from "zod";

export const createUserSchema = object({
    body: object({
        username:string({
            required_error: "Username is required"
        }),
        email: string({
            required_error:"Email is required"
        }).email("Email is not valid"),
        password: string({
            required_error: "Password is required"
        }).min(6, "The password is too short. Please provide more than 8 characters"),
        passwordConfirmation: string({
            required_error: "Please Confirm your password"
        })
    }).refine((data) => data.password === data.passwordConfirmation, {
        message:"Passwords don't match. Please try again",
        path: ["passwordConfirmation"]
    })
})

export default createUserSchema