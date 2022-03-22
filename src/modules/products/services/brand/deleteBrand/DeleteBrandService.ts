import { IBrandsRepository } from "../../../repositories/IBrandsRepository";

class DeleteBrandService {
    constructor(private brandsRepository: IBrandsRepository) {}

    async execute(id: string): Promise<void> {
        await this.brandsRepository.delete(id);
    }
}

export { DeleteBrandService };
