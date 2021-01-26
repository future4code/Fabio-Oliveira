import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { compare } from "../services/generateHash";
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

        const compareResult = await compare(
            input.password,
            user.password
          );

          if(!compareResult){
              throw new Error ('Invalid password')
          }

        if(!user){
            throw new Error ('User not found')
        }
        
        const token = generateToken({id: user.id, role: user.role});

        res.status(200).send({token})

    } catch(error){
        res.status(400).send(error.message)
    }
}