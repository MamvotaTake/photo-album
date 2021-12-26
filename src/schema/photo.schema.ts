import {object, string} from "zod";

const createPhotoSchema = object({
    body: object({
        title:string({
            required_error: "The field title should not be empty"
        }),
        url: string({
            required_error: "The url should not be empty"
        }),

        thumbnail: string({
            required_error: "The field thumbnail should not be empty"
        })

    })
})

export default createPhotoSchema