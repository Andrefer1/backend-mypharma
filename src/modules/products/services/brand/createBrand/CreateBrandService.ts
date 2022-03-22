import { Brand } from "../../../models/Brand";
import { IBrandsRepository } from "../../../repositories/IBrandsRepository";
import AppError from "../../../../../errors/AppError";

class CreateBrandService {
    constructor(private brandsRepository: IBrandsRepository) {}

    async execute(name: string): Promise<Brand> {
        const brandAlreadyExists = await this.brandsRepository.findByName(name);

        if (brandAlreadyExists) {
            throw new AppError("Brand already exists!", 409);
        }

        return await this.brandsRepository.create(name);
    }
}

export { CreateBrandService };
