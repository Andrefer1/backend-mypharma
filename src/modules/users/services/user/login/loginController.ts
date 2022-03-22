import { Request, Response } from "express";
import { LoginService } from "./loginService";

class LoginController {
    constructor(private loginService: LoginService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        try {
            const user = await this.loginService.execute({ email, password });

            return response.status(200).send(user);
        } catch (error) {
            return response.status(error.statusCode).send(error);
        }
    }
}

export { LoginController };
