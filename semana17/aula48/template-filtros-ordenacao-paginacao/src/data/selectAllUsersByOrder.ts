import {connection} from '../index'

export default async function selectAllUsersByOrder(orderBy: string):Promise<any> {

    const result = await connection.raw(`
       SELECT *
       FROM aula48_exercicio
       ORDER BY ${orderBy};
    `)
 
    return result[0]
 }