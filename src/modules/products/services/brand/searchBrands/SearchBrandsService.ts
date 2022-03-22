import { Brand } from "../../../models/Brand";
import { IBrandsRepository } from "../../../repositories/IBrandsRepository";

class SearchBrandsService {
    constructor(private brandsRepository: IBrandsRepository) {}

    async execute(name: string): Promise<Brand[]> {
        return await this.brandsRepository.searchBrands(name);
    }
}

export { SearchBrandsService };
