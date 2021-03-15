import express from 'express'
import { createTask, getTaskById } from '../taskController';

export const taskRouter = express.Router();

taskRouter.put('/task', createTask);
taskRouter.get('/task/:id', getTaskById);