import { connection } from "..";
import { ROLES, user } from "../business/entities/user";

const userTableName = "User_Arq";

export async function createUser(
  id: string,
  name: string,
  email: string,
  password: string,
  role: ROLES
): Promise<void> {
  await connection
    .insert({ id, name, email, password, role })
    .into(userTableName);
}

export async function selectUserByEmail(email: string): Promise<any> {
  const result = await connection
    .select("*")
    .from(userTableName)
    .where({ email });

  return result[0];
}

export async function getUserById(id: string): Promise<any> {
  const result = await connection
    .select("*")
    .from(userTableName)
    .where({ id });

    return result[0]
}

export async function getAllUsers(): Promise<any> {
  const result = await connection
    .select("*")
    .from(userTableName);

    return result;
}

export async function deleteUser(id: string): Promise<void>{
    await connection
    .delete()
    .from(userTableName)
    .where({id})
};