import express, { Express} from "express"
import cors from "cors"
import {userRouter} from './controller/routes/userRouter'
import { postRouter } from "./controller/routes/postRouter"


const app: Express = express()
app.use(express.json())
app.use(cors())

app.use('/labook', userRouter)
app.use('/labook', postRouter)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})