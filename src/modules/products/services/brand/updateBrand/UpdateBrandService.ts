import AppError from "../../../../../errors/AppError";
import { Brand } from "../../../models/Brand";
import { IBrandsRepository } from "../../../repositories/IBrandsRepository";

class UpdateBrandService {
    constructor(private brandsRepository: IBrandsRepository) {}

    async execute({ id, name }: Brand): Promise<Brand> {
        const brandFound = await this.brandsRepository.findByName(name);

        if (brandFound) {
            if (id !== brandFound.id) {
                throw new AppError("Brand already exists!");
            }
        }

        const brand = await this.brandsRepository.update({ id, name });

        if (!brand) {
            throw new AppError("This brand does not exist!");
        }

        return brand;
    }
}

export { UpdateBrandService };
