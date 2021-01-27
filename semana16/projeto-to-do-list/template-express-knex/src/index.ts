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

// Exercício 1

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

// Exercício 2

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

// Exercício 3

app.post("/user/edit/:id", async (req: Request, res: Response) => {
   let errorCode = 400;

   try {

      if(!req.body.name || !req.body.nickname){
         errorCode = 422;
         throw new Error("Não foi possível alterar o usuário. Cheque as informações e tente novamente.")
      }

      await connection.raw(`
         UPDATE TodoListUser
         SET name = "${req.body.name}",
         nickname = "${req.body.nickname}"
         WHERE id = "${req.params.id}"
      `)
      
      res.status(200).send("Usuário alterado com sucesso!")


   } catch(error){
      res.status(400).send(error.message)
   }
})

// Exercício 4


const createTask = async (id: number, title: string, description: string, status: string, limit_date: string, creator_user_id: string, ): Promise<void> => {

   const date = limit_date;
const newDate = date.split("/").reverse().join("-");


   await connection
      .insert({
         id:id,
         title: title,
         description: description,
         status: status,
         limit_date: newDate,
         creator_user_id: creator_user_id  
          })
      .into("TodoListTask");
};

app.put("/task", async (req: Request, res: Response) => {
   try {
      await createTask(
         Date.now(),
         req.body.title,
         req.body.description,
         req.body.status,
         req.body.limit_date,
         req.body.creator_user_id
      )
      

      if (!req.body.title || !req.body.description|| !req.body.status || !req.body.limit_date || !req.body.creator_user_id) {
         throw new Error("Informação essencial não encontrada. Favor revisar.")
      }
      res.status(200).send("Tarefa criada com sucesso!");

   } catch (error) {
      res.status(400).send({ message: error.message });
   }
});

// Exercício 5

const getTaskById = async(id: string): Promise<any> => {
   const result = await connection('TodoListTask')
   .select(
       'id as taskId', 
       'title', 
       'description', 
       'status', 
       'limit_date as limitDate',
       'creator_user_id as creatorUserId'
   )
   .where('id', id);

   return result[0];
}

app.get("/task/:id", async (req: Request, res: Response) => {
   let errorCode = 400;
   try {

    const id = req.params.id as string;
    const task = await getTaskById(id)

      const zero = (number: number) => {
         if (number <= 9) {
             return `0${number}`;
         }else {
             return number; 
         };     
     };
      const dateNewFormat = (stringDate: string) : string => {
         const date = new Date(stringDate);
         const day = zero(date.getDate());
         const month = zero(date.getMonth() + 1);
         const year = date.getFullYear();
         const formatedDate = (`${day}/${month}/${year}`);
         return formatedDate;
     };

     const formatDate = dateNewFormat(task.limitDate)

      if (task.length < 1) {
         errorCode = 422;
         throw new Error("Tarefa inexistente")
      }

      res.status(200).send({message: 'Sucesso!',
      task: {
         taskId: id,
         title: task.title,
         description: task.description,
         status: task.status,
         limitDate: formatDate,
         creatorUserId: task.creatorUserId
      }})

   } catch (error) {
      res.status(errorCode).send(error.message)
   }
});





const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
