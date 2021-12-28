import {Express, Request, response, Response} from "express";
import validateResources from "./middleware/validateResources";
import {createUserSchema} from "./schema/user.schema";
import {createUserHandler} from "./controllers/user.controller";
import {createUserSessionHandler, deleteSessionHandler, getUserSessionHandler} from "./controllers/session.controller";
import {createSessionSchema} from "./schema/session.schema";
import validateUser from "./middleware/validateUser";
import config from "config";
import {deletePhotoSchema, getAllPhotoSchema, loadPhotoSchema} from "./schema/photo.schema";
import {deletePhotoHandler, getAllPhotosHandler, loadPhotosHandler} from "./controllers/photo.controller";
import {deleteAlbumSchema, updateAlbumSchema} from "./schema/album.schema";
import {deleteAlbumHandler, updateAlbumHandler} from "./controllers/album.controller";
const axios = require('axios').default;

const url = config.get<string>('baseURL')
function routes(app: Express) {

    /*USER  AUTHENTICATION ENDPOINT*/
    app.post("/api/user/register", validateResources(createUserSchema), createUserHandler)

    app.post("/api/user/login", validateResources(createSessionSchema), createUserSessionHandler)

    // app.get("/api/user/login", validateUser, getUserSessionHandler)

    app.delete("/api/user/login", validateUser, deleteSessionHandler)


    /*PHOTO ENDPOINT with Axios*/
    app.post("/api/photo",  loadPhotosHandler)

    app.get("/api/photo", [validateUser, validateResources(getAllPhotoSchema)], getAllPhotosHandler)

    app.delete("/api/photo/:photoId", [validateUser, validateResources(deletePhotoSchema)], deletePhotoHandler)

    /*ALBUM ENDPOINT with axios*/
    app.delete("/api/albums/:albumId", [validateUser, validateResources(deleteAlbumSchema)], deleteAlbumHandler)

    app.put("/api/albums/:albumId", [validateUser, validateResources(updateAlbumSchema)], updateAlbumHandler)


}

export default routes