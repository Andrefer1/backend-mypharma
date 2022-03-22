import { User } from "../../../model/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import AppError from "../../../../../errors/AppError";

interface IRequest extends Omit<User, "id"> {
    confirmPassword: string;
}

class CreateUserService {
    constructor(private usersRepository: IUsersRepository) {}
    b;
    async execute({
        name,
        email,
        password,
        confirmPassword,
    }: IRequest): Promise<void> {
        const userFound = await this.usersRepository.findByEmail(email);

        if (userFound) {
            throw new AppError("This email is already registered!", 409);
        }

        if (password !== confirmPassword) {
            throw new AppError("Passwords must be the same!", 400);
        }

        const cryptedPassword = this.usersRepository.cryptPassword(password);

        await this.usersRepository.create({
            name,
            email,
            password: cryptedPassword,
        });
    }
}

export { CreateUserService };
