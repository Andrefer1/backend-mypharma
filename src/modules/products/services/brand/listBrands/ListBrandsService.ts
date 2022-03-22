import { Brand } from "../../../models/Brand";
import { IBrandsRepository } from "../../../repositories/IBrandsRepository";

class ListBrandsService {
    constructor(private brandsRepository: IBrandsRepository) {}

    async execute(): Promise<Brand[]> {
        return await this.brandsRepository.list();
    }
}

export { ListBrandsService };
