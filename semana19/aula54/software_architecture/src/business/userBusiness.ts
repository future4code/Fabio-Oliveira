import { compare } from "bcryptjs";
import { createUser, deleteUser, getAllUsers, getUserById, selectUserByEmail } from "../data/userDatabase"
import { generateToken, getTokenData } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { authenticationData, ROLES, user } from "./entities/user";

export const businessSignup = async (
  name: string,
  email: string,
  password: string,
  role: ROLES
) => {
  let errorCode = 400;

  if (!email || email.indexOf("@") === -1) {
    errorCode = 422;
    throw new Error("E-mail inválido");
  }

  if (!password || password.length < 6) {
    errorCode = 422;
    throw new Error("Senha inválida");
  }

  const id: string = generateId();
  const hashPassword = await hash(password);

  await createUser(id, name, email, hashPassword, role);

  const token = generateToken({
    id,
    role: role,
  });

  return token;
};

export const businessLogin = async (email: string, password: string) => {
  let errorCode = 400;
  

  const user: user = await selectUserByEmail(email);

  if (!user.email || !user.password) {
    errorCode = 422;
    throw new Error("Por favor, ferifique seus dados.");
  }

  if (!email || email.indexOf("@") === -1) {
    errorCode = 422;
    throw new Error("Insira um e-mail válido.");
  }

  if(!user){
      errorCode = 404
      throw new Error("Usuário não encontrado");
      
  }

  const compareResult = await compare(password, user.password);

  if (!compareResult) {
    throw new Error("Senha incorreta.");
  }

  const id: string = user.id;
  const token = generateToken({
    id,
    role: user.role,
  });

  return token;
};


export const businessAllUsers = async (id: string) =>{
    let errorCode = 400;

    const user: user = await getUserById(id)

    if(!user){
        errorCode = 422
        throw new Error("Usuário não encontrado");        
    }

    const users: user[] = await getAllUsers()
    return users
   
}

export const deleteUserBusiness = async (input:{token: string, id: string}) =>{
    let errorCode = 400;
    const tokenData: authenticationData = getTokenData(input.token)

    if(tokenData.role !== "ADMIN"){
        errorCode = 401;
        throw new Error("Somente administradores podem deletar um usuário.");
    }

    await deleteUser(input.id)
}