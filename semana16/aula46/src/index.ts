import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}


const searchActorByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
  `)

  return result[0][0]
}

app.get("/gender", async (req: Request, res: Response) => {
  
  try {
    const gender = req.query.gender as string;
    const actor = await searchActorByGender(gender);

    if(!actor) {
      res.statusCode = 400;
      throw new Error ("Ator(a) não encontrado(a).")
    }

    res.status(200).send({actor: actor});

  } catch(error){
      console.log(error)
      res.send(error.message)
  }


})

const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

app.put('/actors/salary/:id', async (req:Request, res:Response) => {
  try {
    const update = await updateActor((req.params.id), req.body.salary);
    res.status(200).send("Salário atualizado!")
  } catch (error) {
    res.status(400).send(error.message)
  }
})

const searchActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = "${id}"
  `)

  return result[0][0]
}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await searchActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

