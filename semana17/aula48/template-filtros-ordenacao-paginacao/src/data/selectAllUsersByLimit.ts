import {connection} from '../index'

export default async function selectAllUsersByLimit(userLimit: string):Promise<any> {

    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       LIMIT ${userLimit}};
    `)
 
    return result[0]
 }