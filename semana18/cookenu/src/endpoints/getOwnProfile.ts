import { Request, Response } from "express";
import { getUserById } from "../data/getUserById";
import { getData } from "../services/tokenGenerator";


export default async function getOwnProfile(req: Request, res: Response) {
    let errorCode = 400;

    try {
        const token = req.headers.authorization as string
        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)

        if(!user){
            errorCode = 401;
            throw new Error('Unauthorized.')
        }


        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email
        })


    } catch(error){
        res.status(errorCode).send(error.message)
    }
 }