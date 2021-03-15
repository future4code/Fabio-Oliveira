
import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { hash } from "../services/hashPassword";
import { generatorId } from "../services/idGenerator";
import { generateToken } from "../services/tokenGenerator";
import { UserCookenu } from "../types/user";


export default async function signup(req: Request, res: Response) {
    let errorCode = 400;

    try{
        const id = generatorId();  
        
        const {name, email, password, role} = req.body

        if(password < 6 || !password){
            errorCode = 401
            throw new Error('Your password must have at least six characters.')
        }

        if(!name || !email){
            errorCode = 401
            throw new Error ('Please provide the necessary information.')
        }

        const passwordHash:string = await hash(password)

        const newUser:UserCookenu = {
            id: id,
            name: name,
            email: email,
            password: passwordHash,
            role: role || 'normal'

        }

        await createUser(newUser)

        const token = generateToken({
            id: id,
            role: role
        });

        res.status(200).send({token})
         

    } catch (error){
        res.status(errorCode).send(error.message)
    }
}