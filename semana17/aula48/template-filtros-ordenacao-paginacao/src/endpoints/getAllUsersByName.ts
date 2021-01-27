import selectAllUsersByName from '../data/selectAllUsersByName'
import { Request, Response } from "express";

export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {

        const userName = req.query.name as string
        const users = await selectAllUsersByName(userName)


        if (!users.length) {
            res.statusCode = 404
            throw new Error("Nenhum usuário encontrado!")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}