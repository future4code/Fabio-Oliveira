import express, { Request, Response } from 'express';
import cors from 'cors';

import { AddressInfo } from "net";

const app = express();


app.use(express.json());
app.use(cors());

function getAge(birthdate: string) {
    const today = new Date();
    const birthday = new Date(birthdate);
    let year = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        year--;
    }
    console.log(year);
    return year;
}

function isOverAge(birthdate: string) {
    const age = getAge(birthdate);
    console.log(age);
    return age >= 18 ? true : false;
}


type user = {
    id: number;
    name: string;
    cpf: string;
    birthdate: string;
    balance: number;
    transactions: transactions[]
}

type transactions = {
    value: number;
    date: string;
    description: string;
}

let users: user[] = [
    {
        id: 1,
        name: "Makoto",
        cpf: "17255299714",
        birthdate: "12-04-1998",
        balance: 325,
        transactions: [{
            value: 100,
            date: "10-12-2020",
            description: "Depósito em dinheiro."
        }]
    }

]

app.post("/f4bank/create", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {

        const newAccount: user = {
            id: Date.now(),
            name: req.body.name,
            cpf: req.body.cpf,
            birthdate: req.body.birthdate,
            balance: 0,
            transactions: req.body.transactions

        }

        if (!newAccount.name || !newAccount.cpf || !newAccount.birthdate) {
            errorCode = 422
            throw new Error("Informação necessário faltando. Favor revisar.")
        }

        if(!isOverAge(req.body.birthdate)){
            errorCode = 401;
            throw new Error("Precisa ter mais de 18 para se cadastrar.");
            
        }


        users.push(newAccount);

        res.status(200).send("Seja bem vinde ao F4Bank!")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/f4bank/accounts", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const result = users.map(users => ({
            id: users.id,
            name: users.name,
            cpf: users.cpf,
            birthdate: users.birthdate,
            balance: users.balance,
            transactions: users.transactions

        }))

        res.status(200).send(result)

    } catch (error) {

    }
})

app.put("/f4bank/accounts/:id", (req: Request, res: Response) =>{
    let errorCode: number = 400;

    try {
        const newBalance: {id: number, name: string, cpf: string, balance: number} = {
            id: Number(req.params.id),
            name: req.body.name,
            cpf: req.body.cpf,
            balance: req.body.balance
        }

        if(!newBalance.name || !newBalance.cpf) {
            errorCode = 422
            throw new Error ("Os dados não coincidem. Tente novamente.")
        }

        if(isNaN(Number(newBalance.id))) {
            errorCode = 422
            throw new Error ("Id inválido.")
        }

        const userIndex = users.findIndex(((user: user)=> user.id === Number(newBalance.id)))

        if (userIndex === -1) {
            errorCode = 404
            throw new Error ("Usuário não encontrado.")
        }

        users[userIndex].balance = newBalance.balance + users[userIndex].balance;
        res.status(200).send("Saldo alterado com sucesso!")

        

    } catch(error){
        res.status(errorCode).send(error.message)
    }
})

app.get("/f4bank/accounts/user", (req: Request, res: Response) => {
    let errorCode:number = 400;

    try {

        const cpf: string = req.query.cpf as string

        if(!cpf){
            errorCode = 422
            throw new Error ("CPF não encontrado.")
        }

        const userCpf = users.find(((user: user) => user.cpf === cpf))

        if(!userCpf){
            errorCode = 404;
            throw new Error("Cadastro não encontrado.")
        }

        const result = users.map(user => ({
            balance: user.balance
        }))

        res.status(200).send(result)


    } catch(error){
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