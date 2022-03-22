import { Product } from "../../../models/Product";
import { IProductsRepository } from "../../../repositories/IProductsRepository";

class ListProductsService {
    constructor(private productsRepository: IProductsRepository) {}

    async execute(): Promise<Product[]> {
        return await this.productsRepository.list();
    }
}

export { ListProductsService };
