import { Request, Response } from "express";
import selectAllUsersByLimit from '../data/selectAllUsersByLimit';

export const getUsersByLimit = async (req: Request, res: Response): Promise<void> => {
    try {

        const userLimit = req.params.limit as string
        const users = await selectAllUsersByLimit(userLimit)


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