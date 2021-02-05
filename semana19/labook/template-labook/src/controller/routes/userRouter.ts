import express from 'express'
import { UserController } from '../userController'

export const userRouter = express.Router()

const userController: UserController = new UserController()

userRouter.post('/user/signup', userController.Signup)
userRouter.post('/user/login', userController.Login)