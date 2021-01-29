import { Request, Response } from "express";
import { getUserById } from "../data/getUserById";
import { generatorId } from "../services/idGenerator";
import { getData } from "../services/tokenGenerator";
import { Recipe } from "../types/recipe";
import { createRecipe } from "../data/createRecipe";


export default async function postRecipe(req: Request, res: Response){
    let errorCode = 400;

    try {
        const id = generatorId();
        const {title, description} = req.body
        const token = req.headers.authorization as string
        let today = new Date().toLocaleDateString()

        const authenticationData = getData(token)

        const user = await getUserById(authenticationData.id)

        if(!user){
            errorCode = 401;
            throw new Error('Unauthorized.')
        }

        if(!title){
            throw new Error ('Your recipe must have a title.')
        }

        if(!description){
            throw new Error ('Your recipe must have a description')
        }       

        const newRecipe: Recipe = {
            id: id,
            title: title,
            description: description,
            creationDate: today ,
            user_id: user.id
        }

        await createRecipe(newRecipe)

        res.status(200).send('Recipe created successfully!')




    } catch(error){
        res.status(errorCode).send(error.message);
        
    }
}