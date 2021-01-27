import selectAllUsersByNameAndType from '../data/selectAllUsersByType'
import { Request, Response } from "express";
import selectAllUsersByType from '../data/selectAllUsersByType';

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {

        const userType = req.params.type as string
        const users = await selectAllUsersByType(userType)


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