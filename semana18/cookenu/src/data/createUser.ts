import {connection} from '../index';
import { UserCookenu } from '../types/user';

const userTableName = 'UserCookenu';

export const createUser = async (user: UserCookenu):Promise<void> =>{
    await connection
    .insert(user)
    .into(userTableName)
}