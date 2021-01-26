import { Request, Response } from "express";
import getUserById from "../data/selectUserById";
import { getData } from "../services/tokenGenerator";

export default async function getUserAll(req: Request, res: Response){

    try {
    const token = req.headers.authorization as string;

    const authorizationData = getData(token);

    const user = await getUserById(authorizationData.id)

    res.status(200).send({
        id: user.id,
        email: user.email,
        role: user.role
    })

    } catch(error){
        res.status(400).send(error.message)
    }





}