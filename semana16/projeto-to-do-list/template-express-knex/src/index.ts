import express, { Express, Response, Request } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

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

const createUser = async (id: number, name: string, nickname: string, email: string): Promise<void> => {
   await connection
      .insert({
         id: id,
         name: name,
         nickname: nickname,
         email: email,
      })
      .into("TodoListUser");
};

app.post("/user", async (req: Request, res: Response) => {
   try {
      await createUser(
         Date.now(),
         req.body.name,
         req.body.nickname,
         req.body.email
      )

      if (!req.body.name || !req.body.nickname || !req.body.email) {
         throw new Error("Informação essencial não encontrada. Favor revisar.")
      }
      res.status(200).send("Usuário criado com sucesso!");
   } catch (error) {
      //deu tudo errado
      res.status(400).send({ message: error.message });
   }
});

app.get("/user/:id", async (req: Request, res: Response) => {
   let errorCode = 400;
   try {

      const result = await connection.raw(`
         SELECT * from TodoListUser WHERE id= ${req.params.id}
      `)

      if (result.length < 1) {
         errorCode = 422;
         throw new Error("Id inexistente")
      }

      res.status(200).send(result[0])

   } catch (error) {
      res.status(400).send(error.message)
   }
});

app.get("/user/edit/:id", async (req: Request, res: Response) => {
   let errorCode = 400;

   try {

   } catch(error){
      res.status(400).send(error.message)
   }
})



const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
