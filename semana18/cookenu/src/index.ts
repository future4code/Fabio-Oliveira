import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import signup from './endpoints/signup';
import login from './endpoints/login';
import getOwnProfile from './endpoints/getOwnProfile';
import getOtherUserProfile from './endpoints/getOtherUserProfile'
import postRecipe from './endpoints/postRecipe';
import getRecipe from './endpoints/getRecipe';

const app: Express = express();

app.use(express.json());
app.use(cors());

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

app.post('/cookenu/signup', signup)
app.post('/cookenu/login', login)
app.get('/cookenu/user/profile', getOwnProfile)
app.get('/cookenu/user/:id', getOtherUserProfile)
app.post('/cookenu/recipe', postRecipe)
app.get('/cookenu/recipe/:id', getRecipe)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});