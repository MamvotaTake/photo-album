import {Express, Request, Response} from "express";
import validateResources from "./middleware/validateResources";
import {createUserSchema} from "./schema/user.schema";
import {createUserHandler} from "./controllers/user.controller";

function  routes(app : Express) {
    app.get("/users", (req: Request, res: Response) => {
        res.send("Hello world")
    })

    app.post("/api/user/register", validateResources(createUserSchema), createUserHandler)
}
export default routes