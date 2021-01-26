import { hash } from "../services/generateHash";
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
            password: req.body.password,
            role: req.body.role
        }

        if(req.body.role === 'undefined'){
            req.body.role = 'normal'
        }
        const id = generatorId();

        const token = generateToken({id, role: userData.role})

        const hashPassword = await hash(userData.password)

        await createUser(id, userData.email, hashPassword, userData.role)

        res.status(200).send(token)

    } catch(error){
        res.status(400).send(error.message)
    }
}