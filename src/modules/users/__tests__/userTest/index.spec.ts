import createUserTest from "./createUserTest";
import loginUserTest from "./loginUserTest";
import { User as UserSchema } from "../../../../database/models/User";

describe("Teste do usuário", () => {
    afterAll(async () => {
        await UserSchema.deleteOne({ email: "fulano@gmail.com" });
    });

    createUserTest();
    loginUserTest();
});
