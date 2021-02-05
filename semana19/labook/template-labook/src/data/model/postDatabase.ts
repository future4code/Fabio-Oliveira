import { BaseDatabase } from "../BaseDatabase";
import {Post} from '../../business/entities/postType'

export class PostDatabase extends BaseDatabase {
    tableName = 'labook_posts'

    newPost = async (post: Post) => {
        await BaseDatabase
        .connection(this.tableName)
        .insert({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            author_id: post.authorId
        })
    }

    getPost = async (id: string): Promise<any> =>{
      const result =  await BaseDatabase
        .connection(this.tableName)
        .select('*')
        .where({id})

        return result [0]
    }
}