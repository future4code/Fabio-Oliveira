import { PostDatabase } from "../data/model/postDatabase";
import { createTaskInputDTO } from "./entities/postType";
import { NotFoundError } from "./errors/NotFoundError";
import { UnauthorizedError } from "./errors/UnauthorizedError";
import { generateId } from "./services/idGenerator";


const postDatabase: PostDatabase = new PostDatabase

export class PostBusiness{

public businessCreatePost = async (input: createTaskInputDTO) => {

    if(!input.description || !input.photo || !input.type){
        throw new UnauthorizedError ('Missing vital information')
    }

    const id: string = generateId()

    let today = new Date().toLocaleDateString()

    const post = {
        id,
        description: input.description,
        photo: input.photo,
        type: input.type,
        createdAt: today,
        authorId: input.authorId
    }

    await postDatabase.newPost(post)


}

public businessGetPostById = async (id: string) => {

    const result = await postDatabase.getPost(id)

    if(!result){
        throw new NotFoundError ('Post not found')
    }

    const post = {
        id: result.id,
        photo: result.photo,
        description: result.description,
        type: result.type,
        createdAt: result.createdAt,
        authorId: result.authorId
    }

    const postResult = (post)

    return postResult
}
}