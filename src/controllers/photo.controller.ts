import {Request, Response} from 'express';
import {DeletePhotoInput, GetAllPhotoInput} from "../schema/photo.schema";
import {deletePhoto, findPhoto, getAllPhotos, loadPhotos} from "../services/photo.service";
import {loadAlbum} from "../services/album.service";
import PhotoModel from '../models/photo.model';
import config from "config";


const axios = require('axios').default;


export async function loadPhotosHandler(req: Request, res: Response) {

    const userId = res.locals.user._id
    // Sending post data to API URL
    const ids = [200, 1]
    await Promise.all(ids.map(async (id) => {
        await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(async (res: any) => {


                const photo = res.data
                const album = {
                    albumId: res.data.albumId,
                    id: res.data.id,
                    title: res.data.title,
                    user: userId,
                }

                console.log(album);

                await loadPhotos({...photo, user: userId})
                await loadAlbum({...album, user: userId})


                // return res.sendStatus(200)

            }).catch((err: any) => {
                console.error(err.messages);
            });
    })).then(() => {


        res.status(200).json({
            message: "You have successfully loaded the data to the database!"
        })

    }).catch((err: any) => {
        res.send(err.messages)
    })
}

export async function getAllPhotosHandler(
    req: Request<{}, {}, GetAllPhotoInput['body']>,
    res: Response
) {


    const userId = res.locals.user._id

    const body = req.body


    const photo = await getAllPhotos({...body, user: userId})

    PhotoModel.aggregate([
        {'$match': {"userId": "$user"}},
        {
            '$facet': {
                metadata: [{$count: "total"}, {$addFields: {page: config.get<number>('PER_PAGE')}}],
                data: [{$skip: 20}, {$limit: 10}] // add projection here wish you re-shape the docs
            }
        }
    ])

    return res.send({})
}

export async function deletePhotoHandler(
    req: Request<DeletePhotoInput['params']>,
    res: Response
) {


    const userId = res.locals.user._id
    const photoId = req.params.photoId
    console.log(photoId)
    // const update = req.body

    const photo = await findPhoto({photoId})

    console.log(photo)

    if (!photo) return res.sendStatus(404)

    if (String(photo.user !== userId)) {
        return res.sendStatus(403);
    }

    await deletePhoto({photoId})

    return res.sendStatus(200)
}

