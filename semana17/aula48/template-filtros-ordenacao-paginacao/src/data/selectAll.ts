import {connection} from '../index'
import { searchFiltered } from '../types/searchFiltered'

export default async function selectAllUsers(userName: string, type: string, orderBy: string, limit: string, offset: number):Promise<any> {

    const result = await connection.raw(`
    SELECT *
      FROM aula48_exercicio
      WHERE name LIKE "%${userName}%"
      AND type = "${type}"
      ORDER BY ${orderBy}
      LIMIT 5
      OFFSET ${offset};
    `)
 
    return result[0]
 }