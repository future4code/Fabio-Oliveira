//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

app.get("/users", (req:Request, res: Response)=>{

    const result = users.map(users => ({
        id: users.id,
        name: users.name,
        email: users.email,
        type: users.type,
        age: users.age
    }))

    res.status(200).send(result)
})

// 1-
// a) Método get.
// b) O /users dentro das aspas após o método.

// app.get("/users/search", (req: Request, res: Response)=>{
//      let errorCode:number = 400;

//      try {
//         const type:string = req.query.type as string;

//         if (!type) {
//             errorCode= 422
//             throw new Error ("Requisição inválida.")
//         }

//         const userType = users.filter((user) => user.type.toUpperCase() === type.toUpperCase())

//         if(!userType) {
//             errorCode = 404
//             throw new Error ("Não encontrado.")
//         }

//         const result = userType;
//         res.status(200).send(result)


//      } catch (error){
//         res.status(errorCode).send(error.message)
//      }
// })

// 2-
// a) Query, pois, por padrão, todo método GET se passa o parâmetro na URL.
// b) Usando enum.

app.get("/users/search", (req: Request, res: Response)=>{
    let errorCode:number = 400;

    try {
       const name:string = req.query.name as string;

       if (!name) {
           errorCode= 422
           throw new Error ("Requisição inválida.")
       }

       const userName = users.find((user: user) => user.name === name)

       if(!userName) {
           errorCode = 404
           throw new Error ("Usuário não encontrado.")
       }

       const result = userName;
       res.status(200).send(result)


    } catch (error){
       res.status(errorCode).send(error.message)
    }
})

// 3-
// a) Query.

app.post("/users", (req: Request, res:Response)=>{
    let errorCode: number = 400;

    try {

        const newUser: user = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        }

        if(!newUser.name || !newUser.email || !newUser.type || !newUser.age){
            errorCode = 422;
            throw new Error ("Erro ao cadastrar usuário. Preencha as informações corretamente.")            
        }

        users.push(newUser);

        res.status(200).send("Usuário cadastrado com sucesso!")

    } catch(error){

        res.status(errorCode).send(error.message)

    }
})

// 4-
// a) Nada.
// b) Sim, no entanto, manteria a utilização do post devido a sua versatilidade.

app.put("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {

        const reqUser: {id: number, name: string} = {
            id: Number (req.params.id),
            name: req.body.name
        }

        if(isNaN(Number(reqUser.id))) {
            errorCode = 422
            throw new Error ("Id inválido.")
        }

        const userIndex = users.findIndex(((user: user) => user.id === Number(reqUser.id)))

        if (userIndex === -1) {
            errorCode = 404
            throw new Error ("Usuário não encontrado.")
        }

        users[userIndex].name = reqUser.name;
        res.status(200).send("Usuário alterado com sucesso!")

    } catch(error){

        res.status(errorCode).send(error.message)

    }
})

app.patch("/users/:id", (req: Request, res: Response) =>{
    let errorCode: number = 400;

    try {

        const reqUser: {id: number, name: string} = {
            id: Number (req.params.id),
            name: req.body.name
        }

        if(!reqUser.name){
            errorCode = 422
            throw new Error("Nome inválido.")
        }

        if(isNaN(Number(reqUser.id))) {
            errorCode = 422
            throw new Error ("Id inválido.")
        }

        const userIndex = users.findIndex(((user: user) => user.id === Number(reqUser.id)))

        if (userIndex === -1) {
            errorCode = 404
            throw new Error ("Usuário não encontrado.")
        }

        users[userIndex].name = reqUser.name;
        res.status(200).send("Usuário atualizado com sucesso!")

    } catch (error){
        res.status(errorCode).send(error.message)
    }
})

app.delete("/users/:id", (req: Request, res: Response) =>{
    let errorCode: number = 400;

    try {

        const userId = Number(req.params.id)

        if(isNaN(Number(userId))) {
            errorCode = 422;
            throw new Error("Id inválido");
        }

        const userIndex = users.findIndex(((user: user) => user.id === userId))

        users.splice(userIndex, 1)

        res.status(200).send("Usuário deletado com sucesso!");

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
