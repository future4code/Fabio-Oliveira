import {connection} from '../index'

export default async function selectAllUsersByType(userType: string):Promise<any> {

    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       WHERE type LIKE "%${userType}%";
    `)
 
    return result[0]
 }