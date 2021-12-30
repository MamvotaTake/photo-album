import {Express} from "express";
import validateResources from "./middleware/validateResources";
import {createUserSchema} from "./schema/user.schema";
import {createUserHandler} from "./controllers/user.controller";
import {createUserSessionHandler, deleteSessionHandler} from "./controllers/session.controller";
import {createSessionSchema} from "./schema/session.schema";
import validateUser from "./middleware/validateUser";
import config from "config";
import {deletePhotoHandler, getAllPhotosHandler, loadPhotosHandler} from "./controllers/photo.controller";
import {deleteAlbumSchema, updateAlbumSchema} from "./schema/album.schema";
import {deleteAlbumHandler, updateAlbumHandler} from "./controllers/album.controller";


function routes(app: Express) {

    /*USER  AUTHENTICATION ENDPOINT*/
    app.post("/api/user/register", validateResources(createUserSchema), createUserHandler)

    app.post("/api/user/login", validateResources(createSessionSchema), createUserSessionHandler)

    // app.get("/api/user/login", validateUser, getUserSessionHandler)

    app.delete("/api/user/login", validateUser, deleteSessionHandler)


    /*PHOTO ENDPOINT*/
    app.get("/api/photo", [validateUser], loadPhotosHandler)

    app.get("/api/allPhoto", [validateUser], getAllPhotosHandler)

    app.delete("/api/photo/:photoId", [validateUser], deletePhotoHandler)

    /*ALBUM ENDPOINT*/
    app.delete("/api/albums/:albumId", [validateUser], deleteAlbumHandler)

    app.put("/api/albums/:albumId", [validateUser], updateAlbumHandler)


}

export default routes