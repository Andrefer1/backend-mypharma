import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
    constructor(private createdUserService: CreateUserService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, confirmPassword } = request.body;

        try {
            await this.createdUserService.execute({
                name,
                email,
                password,
                confirmPassword,
            });

            return response
                .status(201)
                .send({ msg: "Usuário criado com sucesso!" });
        } catch (error) {
            return response.send(error);
        }
    }
}

export { CreateUserController };
