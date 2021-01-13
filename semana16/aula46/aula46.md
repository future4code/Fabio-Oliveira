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

