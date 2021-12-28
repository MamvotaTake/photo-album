import {Request, Response} from 'express';
import {DeletePhotoInput, GetAllPhotoInput, LoadPhotoInput} from "../schema/photo.schema";
import {deletePhoto, getAllPhotos, loadPhotos} from "../services/photo.service";
import {findAlbum} from "../services/album.service";


export async function loadPhotosHandler(
    req: Request<{}, {}, LoadPhotoInput['body']>,
    res: Response
) {
    const userId = res.locals.user._id
    console.log(userId);

    const body = req.body

    const photo = await loadPhotos({...body, user: userId})

    return res.send(photo)
}

export async function getAllPhotosHandler(
    req: Request<{}, {}, GetAllPhotoInput['body']>,
    res: Response
) {
    const userId = res.locals.user._id

    const body = req.body

    const photo = await getAllPhotos({...body, user: userId})

    return res.send(photo)
}

export async function deletePhotoHandler(
    req: Request<DeletePhotoInput['params']>,
    res: Response
) {

    // const userId = res.locals.user._id
    const photoId = req.params.photoId
    // const update = req.body

    const photo = await findAlbum({photoId})

    if (!photo) return res.sendStatus(404)

    await deletePhoto({photoId})

    return res.sendStatus(200)
}

