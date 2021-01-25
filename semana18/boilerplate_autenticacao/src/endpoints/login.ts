import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from '../services/tokenGenerator';
import {LoginInput} from '../types/loginInput'

export async function login(req: Request, res: Response) {

    try {

        const input: LoginInput = {
            email: req.body.email,
            password: req.body.password
        }

        if(!input.email || !input.password){
            throw new Error ('Login failed. Check your credentials and try again')
        }

        if(input.email.indexOf('@') === -1){
            throw new Error ('Invalid email')
        }

        const user = await getUserByEmail(input.email)

        if(!user){
            throw new Error ('User not found')
        }

        if(user.password !== input.password){
            throw new Error ('Incorrect Password')
        }

        const token = generateToken(user.id);

        res.status(200).send({token})

    } catch(error){
        res.status(400).send(error.message)
    }
}