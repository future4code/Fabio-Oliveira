import { Request, Response } from "express";
import { createTaskInputDTO } from "../business/entities/postType";
import { NotAcceptableError } from "../business/errors/NotAcceptableError";
import { PostBusiness } from "../business/postBusiness";

const postBusiness: PostBusiness = new PostBusiness()


export class PostController {
public createPost = async (req: Request, res: Response) => {

    try {
        let message = "Success!"

        const { photo, description, type, authorId } = req.body

        const input: createTaskInputDTO = {
            photo: photo,
            description: description,
            type: type,
            authorId: authorId
        }

        await postBusiness.businessCreatePost(input)


        res.status(201).send({ message })


    } catch(error){
        let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
    }
}

public getPostById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params

        const post = await postBusiness.businessGetPostById(id)


        res.status(200).send(post)

    } catch(error){
        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
    }
}
}