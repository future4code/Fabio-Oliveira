import { stringToUserRole, User, UserRole } from "../src/model/User";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";
import { UserBusiness } from "../src/business/UserBusiness";

describe("Testing UserBusiness.allUsers", () => {
    let userDatabase = { } as any;
    let hashGenerator = { } as HashGenerator;
    let tokenGenerator = { } as TokenGenerator;
    let idGenerator = { generate: jest.fn(() => "bananinha") } as IdGenerator;

    test("Should return user not found", async () => {
        tokenGenerator = { verify: jest.fn(() => { 
            return { id: "fakeId", role: UserRole.ADMIN }
        })} as any;

        let userDatabase = { getUserById: jest.fn(async (id: string) => undefined) } as any;

        const userBusiness = new UserBusiness(
            idGenerator,
            hashGenerator,
            userDatabase,
            tokenGenerator
          );

          try {
            await userBusiness.getUserById("token")

          } catch(error){
            expect(error.statusCode).toBe(404);
            expect(error.message).toEqual("User not found");
            expect(userDatabase.getUserById).toHaveBeenCalled();
          }


    })
})