import {connection} from '../index'

const userTableName = 'UserCookenu';

export const getUserByEmail = async(email: string): Promise<any> =>{
   const result = await connection
    .select('*')
    .from(userTableName)
    .where({email})

    return result[0]
}