import { User } from "../../business/entities/userType";
import { BaseDatabase } from "../BaseDatabase";


export class UserDatabase extends BaseDatabase {

    insertUser = async(user: User) => {
        await BaseDatabase.connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        }).into('labook_users')
    }

    selectUserByEmail = async(email: string): Promise<User> => {

    try {
       const result = await BaseDatabase.
        connection.
        select("*")
        .from('labook_users')
        .where({email})

        return {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password
        }
        
    } catch(error){

        throw new Error(error.slqMessage || error.message)
    }

}

   
}