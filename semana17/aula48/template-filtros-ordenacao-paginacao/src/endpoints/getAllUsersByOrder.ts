import selectAllUsersByName from '../data/selectAllUsersByName'
import { Request, Response } from "express";
import selectAllUsersByOrder from '../data/selectAllUsersByOrder';

export const getUsersByOrder = async (req: Request, res: Response): Promise<void> => {
    try {

        const orderBy = req.params.orderBy as string
        const users = await selectAllUsersByOrder(orderBy)


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