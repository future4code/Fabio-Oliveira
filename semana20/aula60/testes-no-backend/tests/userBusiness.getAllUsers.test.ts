import { stringToUserRole, User, UserRole } from "../src/model/User";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";
import { UserBusiness } from "../src/business/UserBusiness";

describe("Testing UserBusiness.allUsers", () => {
    let userDatabase = { getUserById: jest.fn(async (id: string) => undefined) } as any;
    let hashGenerator = { } as HashGenerator;
    let tokenGenerator = { } as TokenGenerator;
    let idGenerator = { generate: jest.fn(() => "bananinha") } as IdGenerator;
      
        test("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
          expect.assertions(2);
          try {
            const userBusiness = new UserBusiness(
              userDatabase as any,
              hashGenerator as any,
              tokenGenerator as any,
              idGenerator as any
            );
      
            await userBusiness.getAllUsers(UserRole.NORMAL);
          } catch (err) {
            expect(err.statusCode).toBe(401);
            expect(err.message).toBe("You must be an admin to access this endpoint");
          }
        });
        test("Should return success", async () => {
            const getAllUsers = jest.fn(() => [
              new User(
                "id",
                "Gerard",
                "gerardway@gmail.com",
                "mychemrulez",
                stringToUserRole("ADMIN")
              ),
            ]);
            userDatabase = { getAllUsers };
        
            const userBusiness = new UserBusiness(
              idGenerator,
              hashGenerator,
              userDatabase,
              tokenGenerator
            );
        
            const result = await userBusiness.getAllUsers(UserRole.ADMIN);
        
            expect(getAllUsers).toHaveBeenCalledTimes(1);
            expect(result).toContainEqual({
              id: "id",
              name: "Gerard",
              email: "gerardway@gmail.com",
              role: UserRole.ADMIN,
            });
          });
        });