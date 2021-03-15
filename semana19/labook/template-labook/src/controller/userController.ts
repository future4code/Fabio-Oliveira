import { Request, Response } from "express";
import { signupInputDTO } from "../business/entities/userType";
import { UserBusiness } from "../business/userBusiness";

const userBusiness: UserBusiness = new UserBusiness()

export class UserController{

public Signup = async (req: Request, res: Response) => {

    try {

        const { name, email, password } = req.body

        const input: signupInputDTO = {
            name: name,
            email: email,
            password: password
        }

        let message = "Success!"    
        

        const token = await userBusiness.businessSignup(input)


        res.status(201).send({ message, token })

    } catch (error) {
        res.statusCode = 400
      let message = error.sqlMessage || error.message

      res.send({ message })
    }
}

public Login = async (req: Request, res: Response) => {

    try {

        let message = "Success!"

        const user = {
            email: req.body.email,
            password: req.body.password
        }

         const token = await userBusiness.businessLogin(user)

         res.status(200).send({ message, token })

    } catch(error){
        let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
    }
}
}