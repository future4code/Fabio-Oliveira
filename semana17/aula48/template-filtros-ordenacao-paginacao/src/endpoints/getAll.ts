import { Request, Response } from "express";
import selectAllUsers from '../data/selectAll'
import { searchFiltered } from "../types/searchFiltered";

export const getUsers = async (req: Request, res: Response) => {
    try {

        const userName = req.query.name as string
        const type = req.query.type as string
        const orderBy = req.query.orderBy as string || 'name'
        const limit = req.query.limit as string
        const offset = Number(req.query.offset) <= 0 ? Number(req.query.offset) : 1
        const users = await selectAllUsers(userName, type, orderBy, limit, offset)              


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