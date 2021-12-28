import {object, string, TypeOf} from "zod";

const payload = {
    body: object({
        title: string({
            required_error: "Title is required"
        }),
        owner: string({
            required_error: "Owner field should not be empty."
        })
    })
}
const params = {
    params: {
        albumId: string({
            required_error: "AlbumId is required"
        })
    }
}
// @ts-ignore
export const deleteAlbumSchema = object({
    ...params
})

// @ts-ignore
export const updateAlbumSchema = object({
    ...payload,
    ...params
})


export type DeleteAlbumInput = TypeOf<typeof deleteAlbumSchema>
export type UpdateAlbumInput = TypeOf<typeof updateAlbumSchema>