import {Express, Request, Response} from "express";
import validateResources from "./middleware/validateResources";
import {createUserSchema} from "./schema/user.schema";
import {createUserHandler} from "./controllers/user.controller";
import {createUserSessionHandler, deleteSessionHandler, getUserSessionHandler} from "./controllers/session.controller";
import {createSessionSchema} from "./schema/session.schema";
import validateUser from "./middleware/validateUser";

function routes(app: Express) {
    app.get("/users", (req: Request, res: Response) => {
        res.send("Hello world")
    })

    app.post("/api/user/register", validateResources(createUserSchema), createUserHandler)

    app.post("/api/user/login", validateResources(createSessionSchema), createUserSessionHandler)

    app.get("/api/user/login", validateUser, getUserSessionHandler)

    app.delete("/api/user/login", validateUser, deleteSessionHandler)

}

export default routes