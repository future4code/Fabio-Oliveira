Exercício 1

a) Ao utilizar o raw, ele entrega diversos metadados além dos dados requisitados.

b) 
```typescript
const searchActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)

  return result[0][0]
}

app.get("/name", async (req: Request, res: Response) => {
  
  try {
    const name = req.query.name as string;
    const actor = await searchActorByName(name);

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
```

c)
```typescript
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
```

Exercício 2

a) 
```typescript
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
  .update({
    salary: salary
  })
  .where("id", id)
}

app.put('/actors/salary/:id', async (req:Request, res:Response) => {
  try {
    const update = await updateActor((req.params.id), req.body.salary);
    res.status(200).send("Salário atualizado!")
  } catch (error) {
    res.status(400).send(error.message)
  }
})
```

b) 
```typescript
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 
```

c)
```typescript
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
```

Exercício 3

a) 
```typescript
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

```

b)
```typescript
app.get("/actor", async (req: Request, res: Response) => {
  
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
```

Exercício 4

a)
```typescript
app.post('/actor', async (req:Request, res:Response) => {
  try {
    const update = await updateActor(req.body.id, req.body.salary);
    res.status(200).send("Salário atualizado!")
  } catch (error) {
    res.status(400).send(error.message)
  }
})
```

b)
```typescript
app.delete("/actor/:id", async (req: Request, res: Response) =>{
  try {

    await deleteActor(req.params.id);

    res.status(200).send("Ator deletado com sucesso!")

  } catch(error) {
    res.status(400).send(error.message)
  }
})
```

Exercício 5
```typescript
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
```

Exercício 6

```typescript
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
```

