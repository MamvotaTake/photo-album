import {Request, Response} from 'express'
import {UpdateAlbumInput} from "../schema/album.schema";
import {deleteAlbum, findAlbum, updateAlbum} from "../services/album.service";
import {assignWith} from "lodash";

export async function deleteAlbumHandler(req: Request, res: Response) {
    // const userId = res.locals.user._id
    const albumId = req.params.albumId
    // const update = req.body

    const album = await findAlbum({albumId})

    if(!album) return res.sendStatus(404)

    await deleteAlbum({albumId})

    return res.sendStatus(200)
}


export async function updateAlbumHandler(
    req: Request<UpdateAlbumInput['params']>,
    res: Response
) {
    const albumId = req.params.albumId;

    const album = await findAlbum({albumId})

    if(!album) return res.sendStatus(404)

    return res.send(album)
}