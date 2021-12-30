import {Request, Response} from 'express';
import {GetAllPhotoInput, UpdatePhotoInput} from "../schema/photo.schema";
import {deletePhoto, findPhoto, getAllPhotos, loadPhotos} from "../services/photo.service";
import {loadAlbum} from "../services/album.service";


const axios = require('axios').default;


export async function loadPhotosHandler(req: Request, res: Response) {

    const userId = res.locals.user._id
    // Sending post data to API URL
    const ARRAY_LENGTH = 5
    const randomArray = []
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        randomArray.push(parseInt(String((Math.random() * (100 - 50 + 1))), 10) + 50)
    }
    console.log(randomArray)
    await Promise.all(randomArray.map(async (id) => {
        await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(async (res: any) => {


                const photo = res.data
                const album = {
                    id: res.data.id,
                    title: res.data.title,
                    user: userId,
                }


                await loadPhotos({...photo, user: userId})
                await loadAlbum({...album, user: userId})


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
    res.send({
        total: photo.length,
        data: photo
    })
}

export async function deletePhotoHandler(
    req: Request<UpdatePhotoInput['params']>,
    res: Response
) {


    const userId = res.locals.user._id
    const photoId = req.params.photoId

    const photo = await findPhoto({photoId})


    if (!photo) return res.sendStatus(404)

    if (String(photo.user) !== userId) {
        return res.sendStatus(403);
    }

    await deletePhoto({photoId})

    return res.sendStatus(200)
}

