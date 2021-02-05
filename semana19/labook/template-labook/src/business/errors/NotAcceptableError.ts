import { CustomError } from "./customError";

export class NotAcceptableError extends CustomError{

    constructor(message: string){
        super(406, message)
    }
};