import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import { allUsers, deleteUser, login, signup } from './controller/userController'

dotenv.config()

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app = express()
app.use(express.json())
app.use(cors())

app.put("/signup", signup);
app.post("/login", login);
app.get("/all", allUsers);
app.delete("/delete/:id", deleteUser)


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})