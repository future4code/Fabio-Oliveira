import { Request, Response } from "express";
import { getData } from "../services/tokenGenerator";
import getUserById  from '../data/selectUserById'

export async function getUser(req: Request, res: Response): Promise<void> {
    try {

        const token:string = req.headers.authorization!

        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)

        res.status(200).send({
            id: user.id,
            email: user.email
        })

    } catch (error) {
        res.status(400).send(error.message)
    }
}
