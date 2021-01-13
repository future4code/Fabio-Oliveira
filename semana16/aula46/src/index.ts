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

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 

app.delete("/actor/:id", async (req: Request, res: Response) =>{
  try {

    await deleteActor(req.params.id);

    res.status(200).send("Ator deletado com sucesso!")

  } catch(error) {
    res.status(400).send(error.message)
  }
})

const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  release_Date: Date,
  playing_limit_date: Date
) => {
  await connection

  .insert({
    id: id,
    title: title,
    synopsis: synopsis,
    release_Date: release_Date,
    playing_limit_date: playing_limit_date
  })
  .into("Movie");
};

app.post("/movie", async (req: Request, res: Response) =>{

  try {
  await createMovie(
    req.body.id,
    req.body.title,
    req.body.synopsis,
    req.body.release_Date,
    req.body.playing_limit_date
  )
  res.status(200).send("Filme adicionado com sucesso!")
  } catch(error){
    res.status(400).send(error.message)
  }
});

const allMovies = async (): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Movie LIMIT 15
  `)

  return result[0]
};

app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const movies = await allMovies();

    res.status(200).send({movies: movies})
  } catch(error) {

  };
})

const searchMovie = async (query: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie 
    WHERE title LIKE "%${query}%" OR synopsis LIKE "%${query}%"
    ORDER BY release_Date ASC
  `)

  return result[0]
};

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (error)  {
    res.status(400).send(error.message);
  }
});
