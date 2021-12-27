import {Request, Response} from 'express';
import {signJwt, verifyJwt} from "../utils/jwt.utils";
import config from "config";
import {validatePassword} from "../services/user.services";
import {createSession} from "../services/session.service";

export async function createUserSessionHandler(req: Request, res: Response) {

    //password validation
    const user = await validatePassword(req.body)

    if(!user) return res.status(401).send("Invalid email or password")

    // Session creation

    // @ts-ignore
    const session = await createSession(user._id, req.get("user-agent") || "")

    const accessToken = signJwt(
        {...user, session:session._id},
        {expiresIn: config.get('accessTokenTtl')}
    )

    const refreshToken = signJwt(
        {...user, session:session._id},
        {expiresIn: config.get('refreshTokenTtl')}
    )

    return res.send({accessToken, refreshToken})
}