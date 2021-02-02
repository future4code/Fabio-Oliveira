import { Request, Response } from "express";
import { user } from "../business/entities/user";
import { businessAllUsers, businessLogin, businessSignup, deleteUserBusiness } from "../business/userBusiness";
import { getTokenData } from "../services/authenticator";

export const signup = async(
req: Request, res: Response
) =>{
    try {
        const {name, email, password, role} = req.body
        const token = await businessSignup(
            name,
            email,
            password,
            role
        )

        res.status(200).send({message: "Usuário criado com sucesso!", token})
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}

export const login = async(
    req: Request, res: Response
)=>{
    try {
        const {email, password} = req.body
        const token = await businessLogin(
            email,
            password
        )

        res.status(200).send({message: "Login realizado com sucesso!", token})
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}

export const allUsers = async (
    req: Request, res: Response
) =>{
    try {
        const token = req.headers.authorization as string
        const authenticationData = getTokenData(token)
        const id = authenticationData.id
        const users: user[] = await businessAllUsers(id)

        res.status(200).send({users})
 
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}

export const deleteUser = async (req: Request, res: Response) =>{
    try {
        const token: string = req.headers.authorization as string;
        const id: string = req.params.id as string

        const requestData = {
            token: token,
            id: id
        }

        await deleteUserBusiness(requestData)

        res.status(200).send({message: "Usuário deletado"})

    } catch (error) {
        res.status(400).send(error.message)
        
    }

} 