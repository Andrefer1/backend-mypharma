import { Product } from "../../../models/Product";
import { IProductsRepository } from "../../../repositories/IProductsRepository";

class SearchProductsService {
    constructor(private productsRepository: IProductsRepository) {}

    async execute(name: string): Promise<Product[]> {
        return await this.productsRepository.searchProducts(name);
    }
}

export { SearchProductsService };
