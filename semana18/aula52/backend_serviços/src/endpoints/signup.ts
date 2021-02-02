import { hash } from "../services/generateHash";
import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { generatorId } from '../services/idGenerator';
import { generateToken } from '../services/tokenGenerator';
import { userAddress } from "../types/userAddress";
import getAddressByCep from '../services/addressManager'
import { insertAddress } from "../data/insertAddress";

export default async function signup(req: Request, res: Response) {

    try {

        const id = generatorId();
        const idAddress = generatorId();

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error('Your password must have at least six characters')
        }

        if (!req.body.email || req.body.email.indexOf('@') === -1) {
            throw new Error('Invalid email format')
        }

        if (!req.body.cep) {
            throw new Error('Please insert your CEP. Numbers only')
        }

        if (!req.body.number) {
            throw new Error("Please insert your residence's number")
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            cep: req.body.cep,
            number: req.body.number,
            complement: req.body.complement
        }

        if (req.body.role === 'undefined') {
            req.body.role = 'normal'
        }

        const addressInfo = await getAddressByCep(userData.cep as string)

        const newAddress: userAddress = {
            id: idAddress,
            street: addressInfo.street,
            number: userData.number,
            neighborhood: addressInfo.neighborhood,
            complement: userData.complement,
            city: addressInfo.city,
            state: addressInfo.state,
            user_id: id
        }        

        const token = generateToken({ id, role: userData.role })

        const hashPassword = await hash(userData.password)

        await createUser(id, userData.email, hashPassword, userData.role)
        await insertAddress(newAddress)

        res.status(200).send(token)

    } catch (error) {
        res.status(400).send(error.message)
    }
}