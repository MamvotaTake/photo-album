import {Request, Response} from 'express';
import {CreateUserInput} from "../schema/user.schema";
import {omit} from "lodash";
import {createUser} from "../services/user.services";
import logger from "../utils/logger";

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response,

){
    try{
        const user = await createUser(req.body)
        return res.send(omit(user, "password"))
    }catch(err:any) {
        logger.error(err)
        return res.status(409).send(err)
    }

}