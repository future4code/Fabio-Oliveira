import {connection} from '../index'

const userTableName = "User";

	export const deleteUser = async (id: string): Promise<void> => {
	  await connection
	    .delete()
        .from(userTableName)
        .where({ id })
	};

