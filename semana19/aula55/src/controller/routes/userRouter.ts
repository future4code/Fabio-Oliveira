import express from 'express'
import {signup, login} from '../userController'

export const userRouter = express.Router();

userRouter.post('/user/signup', signup);
userRouter.post('/user/login', login);