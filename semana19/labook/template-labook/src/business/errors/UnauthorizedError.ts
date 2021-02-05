import { CustomError } from "./customError";

export class UnauthorizedError extends CustomError{
    constructor(message:string){
        super(401, message)
    }
}