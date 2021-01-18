import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {getUsersByName} from './endpoints/getAllUsersByName';
import {getUsersByType} from './endpoints/getAllUsersByType'
import { getUsersByOrder } from "./endpoints/getAllUsersByOrder";
import { getUsersByLimit } from "./endpoints/getAllUsersByLimit";
import {getUsers} from './endpoints/getAll'

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

app.get("/aula48/search", getUsersByName)
app.get("/aula48/search/:type", getUsersByType)
app.get("/aula48/search/all/:orderBy", getUsersByOrder)
app.get("/aula48/search/limit/:limit", getUsersByLimit)
app.get("/aula48/all", getUsers)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});