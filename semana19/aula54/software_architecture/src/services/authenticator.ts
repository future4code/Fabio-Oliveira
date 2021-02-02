import * as jwt from "jsonwebtoken"
import { authenticationData} from "../business/entities/user"
import dotenv from "dotenv"


dotenv.config();


export function generateToken(
   payload: authenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: "24min"
      }
   )
}



export function getTokenData(token: string): authenticationData {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role: payload.role,
  };

  return result;
}