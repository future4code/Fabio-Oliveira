import {connection} from '../index'

export default async function selectAllUsersByName(userName: string):Promise<any> {

    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       WHERE name LIKE "%${userName}%";
    `)
 
    return result[0]
 }