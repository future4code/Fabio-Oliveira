import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { compare } from "../services/hashPassword";
import { generateToken } from "../services/tokenGenerator";


export default async function login(req: Request, res: Response) {
    let errorCode = 400;

    try {
        const {email, password} = req.body;

        if(email.indexOf('@') === -1){
            throw new Error ('Invalid email.')
        }

        if(!email || !password){
            errorCode = 401
            throw new Error ('Invalid credentials.')
        }

        const user = await getUserByEmail(email)

        const comparePassword = await compare(
            password,
            user.password
        )

        if(!comparePassword){
            errorCode = 401
            throw new Error ('Incorrect Password.')
        }

        if(!user){
            errorCode = 404
            throw new Error ('User not found.')
        }

        const token = generateToken({id: user.id, role: user.role})

        res.status(200).send({token})


    } catch(error){
        res.status(errorCode).send(error.message || error.sql.message)
    }
}