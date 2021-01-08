import express, {Request, Response} from 'express';
import cors from 'cors';

import { AddressInfo } from "net";

const app = express();


app.use(express.json());
app.use(cors());


type user = {
    id: number;
    name: string;
    cpf: number;
    birthdate: number;
    balance: number;
    transactions: transactions[]
}

type transactions = {
    value: number;
    date: number;
    description: string;
}

let users: user[] = [
    {
        id: 1,
        name: "Makoto",
        cpf: 17255299714,
        birthdate: 19980412,
        balance: 325,
        transactions: [{
            value: 100,
            date: 20201210,
            description: "Pagamento de agiota."
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

        if(!newAccount.name || !newAccount.cpf || !newAccount.birthdate) {
            errorCode = 422
            throw new Error ("Informação necessário faltando. Favor revisar.")
        }

        // if(newAccount.birthdate < 18){
        //     errorCode = 422
        //     throw new Error ("Menores de 18 anos não podem abrir conta no F4Bank.")
        // }

        users.push(newAccount);

        res.status(200).send("Seja bem vinde ao F4Bank!")

    } catch (error){
        res.status(errorCode).send(error.message)
    }
})

app.get("/f4bank/accounts", (req: Request, res: Response) =>{
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

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});