import {Request, Response} from 'express'
import {DeleteAlbumInput, UpdateAlbumInput} from "../schema/album.schema";
import {deleteAlbum, findAlbum, updateAlbum} from "../services/album.service";



export async function deleteAlbumHandler(
    req: Request<UpdateAlbumInput["params"]>,
    res: Response) {

    const userId = res.locals.user._id
    const albumId = req.params.albumId
    console.log(albumId);

    const album = await findAlbum({albumId})

    if (!album) return res.sendStatus(404)


    if (String(album.user) !== userId) {
        return res.sendStatus(403);
    }

    await deleteAlbum({albumId})

    return res.status(200).json({
        message: 'Album has successfully deleted'
    })
}

export async function updateAlbumHandler(
    req: Request<UpdateAlbumInput['params']>,
    res: Response
) {
    const userId = res.locals.user._id
    const update = req.body


    const albumId = req.params.albumId;


    const album = await findAlbum({albumId})

    if(!album) return res.sendStatus(404)

    if (String(album.user) !== userId) {
        return res.sendStatus(403);
    }

    const updatedAlbum = await updateAlbum({ albumId }, update, {
        new: true,
    });

    return res.send(updatedAlbum)
}