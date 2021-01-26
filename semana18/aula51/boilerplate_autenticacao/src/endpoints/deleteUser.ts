import { Request, Response } from "express";
import {getData} from '../services/tokenGenerator';
import { deleteUser } from "../data/deleteUser";

export default async function deleteUserById(req: Request, res: Response) {
    try {

        const token = req.headers.authorization as string;
        const authenticationData = getData(token)

        if(authenticationData.role !== 'admin'){
            throw new Error ('Only admins can delete users')
        }

        const id = req.params.id

        await deleteUser(id)

        res.status(200).send('User successfully removed');

    } catch(error){
        res.status(400).send(error.message)
    }
}