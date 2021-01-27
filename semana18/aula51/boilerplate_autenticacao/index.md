1 - a) Acho ótimo usar strings para representar ids, pois assim aumenta a segurança e diminui as chances de surgir um id repetido. É muito melhor do que apenas usar números.

b) Numa pasta chamada service, por fins de organização do código na pasta, criei o seguinte código para representar o uuid.

```typescript
import {v4} from 'uuid'

export function generatorId(): string{
    return v4()

}
```


2 -
a) O código está criando a tabela 'User' através do próprio código e não de uma workbench. A const 'userTableName' guarda o nome que o dev deseja nomear sua tabela de usuários.

b) 
```sql
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c)
```typescript
import knex from 'knex'

export const connection = knex({
  client: 'mysql',
  connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
  }
})

export default async function createUser(
    id: string,
    email: string,
    password: string
): Promise<any> {
    const result =
    await connection.raw(`
    INSERT INTO User(id, email, password)
    VALUES
    ${id},
    ${email},
    ${password}  
    
    `)

    return result[0]
}
```

3 - 
a) Para declarar que o valor repetido é do tipo string.

b)
```typescript
import dotenv from "dotenv";
import * as jwt from "jsonwebtoken";

dotenv.config();

const expiresIn = "1min"

export const generateToken=(input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

type AuthenticationData = {
  id: string;
}

```

4 -
a, b e c) Estão no código.

5 -
a)
```typescript
import {connection} from '../index'

const userTableName = 'User'

export const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ email });
 
    return result[0];
   }
```

6-
a e b)
```typescript
import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from '../services/tokenGenerator';
import {LoginInput} from '../types/loginInput'

export async function login(req: Request, res: Response) {

    try {

        const input: LoginInput = {
            email: req.body.email,
            password: req.body.password
        }

        if(!input.email || !input.password){
            throw new Error ('Login failed. Check your credentials and try again')
        }

        if(input.email.indexOf('@') === -1){
            throw new Error ('Invalid email')
        }

        const user = await getUserByEmail(input.email)

        if(!user){
            throw new Error ('User not found')
        }

        if(user.password !== input.password){
            throw new Error ('Incorrect Password')
        }

        const token = generateToken({id: user.id});

        res.status(200).send({token})

    } catch(error){
        res.status(400).send(error.message)
    }
}
```

7-
a) Ela indica que a função aceita qualquer tipo como resposta.

b)
```typescript
import * as jwt from "jsonwebtoken";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
```

8-
a)
```typescript
import {connection} from '../index'

const userTableName = 'User'

export const getUserByEmail = async(id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ id });
 
    return result[0];
   }
```

b)
```typescript
import { Request, Response } from "express";
import { getData } from "../services/tokenGenerator";
import { getUserById } from '../data/selectUserById'

export async function getUser(req: Request, res: Response) {
    try {

        const token = req.headers.authorization as string

        const AuthenticationData = getData(token)

        const user = await getUserById(AuthenticationData.id)

        res.status(200).send({
            id: user.id,
            email: user.email
        })

    } catch (error) {
        res.status(400).send(error.message)
    }
}

```