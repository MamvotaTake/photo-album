import {Request, Response, NextFunction} from "express";
import {get} from "lodash";
import {verifyJwt} from "../utils/jwt.utils";
import {reIssueAccessToken} from "../services/session.service";

const deserializeUser= async (req:Request, res: Response, next: NextFunction) =>{

    const accessToken = get(req, 'headers.authorization', '').replace(/^Bearer\s/, "")

    const refreshToken = get(req, "headers.x-refresh" )

    if(!accessToken) return next()

    const {decoded, expired} = verifyJwt(accessToken)

    if(decoded) {
        res.locals.user = decoded
        return next()
    }
    return next()

    if(expired && refreshToken){
        const newAccessToken = await reIssueAccessToken({refreshToken})

        if(newAccessToken){
            // @ts-ignore
            res.setHeader('x-access-token', newAccessToken)
        }
        // @ts-ignore
        const result = verifyJwt(newAccessToken)

        res.locals.user = result.decoded
    }
}

export default deserializeUser