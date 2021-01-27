import {connection} from '../index'

const userTableName = 'User'

export default async function getUserById (id: string): Promise<any> {
    const result = await connection(userTableName)
      .select("*")
      .where({ id });
 
    return result[0];
   }