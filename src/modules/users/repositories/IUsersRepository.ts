import { User } from "../model/User";

interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
}

interface IUsersRepository {
    create({ name, email, password }: ICreateUserDTO): Promise<void>;

    findByEmail(email: string): Promise<User>;
    cryptPassword(password: string): string;
}

export { ICreateUserDTO, IUsersRepository };
