import {Request, Response} from 'express';
import {signJwt, verifyJwt} from "../utils/jwt.utils";
import config from "config";
import {validatePassword} from "../services/user.services";
import {createSession, findSessions, updateSession} from "../services/session.service";

export async function createUserSessionHandler(req: Request, res: Response) {

    //password validation
    const user = await validatePassword(req.body)

    if(!user) return res.status(401).send("Invalid email or password")

    // Session creation

    // @ts-ignore
    const session = await createSession(user._id, req.get("user-agent") || "")

    const accessToken = signJwt(
        {...user, session:session._id},
        {expiresIn: config.get<string>('accessTokenTtl')}
    )

    const refreshToken = signJwt(
        {...user, session:session._id},
        {expiresIn: config.get<string>('refreshTokenTtl')}
    )

    return res.send({accessToken, refreshToken})
}

export async function getUserSessionHandler(req: Request, res: Response) {

    const userId = res.locals.user._id

    const sessions = await findSessions({user: userId, valid:true})

    return res.send(sessions)


}

export async function deleteSessionHandler(re:Request, res: Response){
    const sessionId = res.locals.session

    await  updateSession({_id: sessionId}, {valid:false})

    res.send({
        accessToken:null,
        refreshToken:null
    })

}