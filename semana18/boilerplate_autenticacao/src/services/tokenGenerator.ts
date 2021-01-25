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

export const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};



