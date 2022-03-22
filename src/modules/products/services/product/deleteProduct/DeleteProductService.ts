import { IProductsRepository } from "../../../repositories/IProductsRepository";
import AppError from "../../../../../errors/AppError";

class DeleteProductService {
    constructor(private productsRepository: IProductsRepository) {}

    async execute(id: string): Promise<void> {
        const productIndex = await this.productsRepository.delete(id);

        if (!productIndex) {
            throw new AppError("Product not found!", 404);
        }
    }
}

export { DeleteProductService };
