import express from 'express'
import { PostController } from '../postController';

export const postRouter = express.Router();

const postController: PostController = new PostController()

postRouter.post('/post/create', postController.createPost);
postRouter.get('/post/:id', postController.getPostById);