import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import { User } from "../../model/User";
import { User as UserSchema } from "../../../../database/models/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private static INSTANCE: UsersRepository;

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            return (UsersRepository.INSTANCE = new UsersRepository());
        }

        return UsersRepository.INSTANCE;
    }

    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        const user = await new UserSchema({
            _id: uuidV4(),
            name,
            email,
            password,
        });

        await user.save();
    }

    async findByEmail(email: string): Promise<User> {
        return await UserSchema.findOne({ email: email });
    }

    cryptPassword(password: string): string {
        const salt = bcrypt.genSaltSync(12);
        const passwordHash = bcrypt.hashSync(password, salt);

        return passwordHash;
    }
}

export { UsersRepository };
