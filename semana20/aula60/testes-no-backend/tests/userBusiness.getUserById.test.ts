import { UserBusiness } from "../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../src/model/User";
import { HashGenerator } from "../src/services/hashGenerator";
import { IdGenerator } from "../src/services/idGenerator";
import { TokenGenerator } from "../src/services/tokenGenerator";

describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = { getUserById: jest.fn(async (id: string) => undefined) } as any;
    let hashGenerator = { } as HashGenerator;
    let tokenGenerator = { } as TokenGenerator;
    let idGenerator = { generate: jest.fn(() => "bananinha") } as IdGenerator;
    
    
  
    test("Should return 'User not found' when user does not exist", async () => {
      expect.assertions(2);
      const userBusiness = new UserBusiness(
        idGenerator,
       hashGenerator,
       userDatabase,
       tokenGenerator
)
      try {         
        await userBusiness.getUserById("invalid-id");
      } catch (err) {
        expect(err.statusCode).toBe(404);
        expect(err.message).toBe("User not found");
      }
    });

    test("Should return 'User not found' when user does not exist", async () => {

        const getUserById = jest.fn(
          (id: string) =>
            new User(
              "id",
              "Gerard",
              "gerardway@gmail.com",
              "mychemrulez",
              stringToUserRole("ADMIN")
            )
        );
    
        userDatabase = { getUserById }
    
        const userBusiness = new UserBusiness(
            idGenerator,
           hashGenerator,
           userDatabase,
           tokenGenerator
    )
    
        const user = await userBusiness.getUserById("id");
    
        expect(getUserById).toHaveBeenCalledWith("id");
        expect(user).toEqual({
          id: "id",
          name: "Gerard",
          email: "gerardway@gmail.com",
          role: UserRole.ADMIN,
        });
      });
    });

  