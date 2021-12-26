import {Express, Request, Response} from "express";

function  routes(app : Express){
    app.get("/users", (req:Request, res:Response) =>  {
        res.send("Hello world")
    })
}

export default routes;