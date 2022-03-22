import bcrypt from "bcrypt";

import { User } from "../../../model/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import AppError from "../../../../../errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

class LoginService {
    constructor(private usersRepository: IUsersRepository) {}

    async execute({ email, password }: IRequest): Promise<User> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("User not found!", 404);
        }

        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword) {
            throw new AppError("Password invalid!", 401);
        }

        return user;
    }
}

export { LoginService };
