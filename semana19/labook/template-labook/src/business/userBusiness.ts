import { UserDatabase } from "../data/model/userDatabase";
import { loginInputDTO, signupInputDTO } from "./entities/userType";
import { generateToken } from "./services/authenticator";
import { HashManager } from "./services/hashManager";
import { generateId } from "./services/idGenerator";
import {User} from '../business/entities/userType'
import { NotAcceptableError } from "../business/errors/NotAcceptableError";

const userDatabase: UserDatabase = new UserDatabase()
const hashManager: HashManager = new HashManager()

export class UserBusiness{

public businessSignup = async (input: signupInputDTO) => {

    let message = ''

    const id: string = generateId();

    const cypherPassword = await hashManager.hash(input.password)

    const user = {
        id,
        name: input.name,
        email: input.email,
        password: cypherPassword
    }
    if (!input.name || !input.email || !input.password) {
        message = '"name", "email" and "password" must be provided'
        throw new NotAcceptableError(message)
    }


    await userDatabase.insertUser(user)
    

    const token:string = generateToken({
        id
    })

    return token
}

public businessLogin = async(input: loginInputDTO) => {

    let message = ''

    const user: User = await userDatabase.selectUserByEmail(input.email)

    const comparePassword: boolean = await hashManager.compare(input.password, user.password)

    if(!comparePassword){
        message = 'Incorrect Password'
        throw new NotAcceptableError(message)
    }

    if (!user.email || !user.password) {
        message = '"email" and "password" must be provided'
        throw new NotAcceptableError(message)
     }

    const token:string = generateToken({
        id: user.id
    })

    return token
}
}