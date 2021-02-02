import {connection} from '../index'

const userTableName = "User";

	export const createUser = async (
		id: string, 
		email: string, 
		password: string,
		role: string) => {
	  await connection
	    .insert({
	      id,
	      email,
		  password,
		  role
	    })
	    .into(userTableName);
	};