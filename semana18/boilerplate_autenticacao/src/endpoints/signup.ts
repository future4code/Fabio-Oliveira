import { Request, Response } from "express";
import {createUser} from "../data/createUser";
import {generatorId} from '../services/idGenerator';
import {generateToken} from '../services/tokenGenerator';

export default async function signup(req: Request, res: Response) {

    try{

        if(!req.body.password || req.body.password.length < 6){
            throw new Error ('Your password must have at least six characters')
        }

        if(!req.body.email || req.body.email.indexOf('@') === -1){
            throw new Error ('Invalid email format')
        }

        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        const id = generatorId();

        const token = generateToken({id})

        await createUser(id, userData.email, userData.password)

        res.status(200).send(token)

    } catch(error){
        res.status(400).send(error.message)
    }
}