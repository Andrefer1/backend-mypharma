import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
import { LoginController } from "./loginController";
import { LoginService } from "./loginService";

const usersRepository = UsersRepository.getInstance();
const loginService = new LoginService(usersRepository);
const loginController = new LoginController(loginService);

export { loginController };
