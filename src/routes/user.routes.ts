import { Router } from "express";
import { loginController } from "../modules/users/services/user/login";
import { createUserController } from "../modules/users/services/user/createUser";

const userRoutes = Router();

userRoutes.post("/login", (request, response) => {
    return loginController.handle(request, response);
});

userRoutes.post("/register", (request, response) => {
    return createUserController.handle(request, response);
});

export { userRoutes };
