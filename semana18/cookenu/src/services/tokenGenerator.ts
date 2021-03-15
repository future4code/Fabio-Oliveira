import dotenv from "dotenv";
import * as jwt from "jsonwebtoken";

dotenv.config();

const expiresIn = "10min"

export const generateToken=(input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

export const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role: payload.role
  };
  return result;
};

export type AuthenticationData = {
  id: string,
  role: string;
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjllMmZkMmMwLTAyMzctNGY1ZS05Y2VkLTY4YjZiNWQ3MGY4MCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMTg2ODQ5MywiZXhwIjoxNjExODY5MDkzfQ.NTF6y4BEKNKl3xklDP5DwaQxqob6F0PTulh0BkDGDNM


