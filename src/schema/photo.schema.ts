import {object, string, TypeOf} from "zod";
import {util} from "zod/lib/helpers/util";
import objectKeys = util.objectKeys;

const payload = {
    body: object({
        title:string({
            required_error: "The field title should not be empty"
        }),
        url: string({
            required_error: "The url should not be empty"
        }),

        thumbnailUrl: string({
            required_error: "The field thumbnail should not be empty"
        })

    })
}

const params = {
    params: {
        photoId: string({
            required_error: "PhotoId is required"
        })
    }
}

export const getAllPhotoSchema = object({
    ...payload
})

// @ts-ignore
export const deletePhotoSchema = object({
    ...params
})

export type GetAllPhotoInput = TypeOf<typeof getAllPhotoSchema>
export type DeletePhotoInput = TypeOf<typeof deletePhotoSchema>