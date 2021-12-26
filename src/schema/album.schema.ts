import {object, string} from "zod";

const createAlbumSchema = object({
    body: object({
        title: string({
            required_error: "Title is required"
        }),
        owner: string({
            required_error: "Owner field should not be empty."
        })
    })
})

export default createAlbumSchema