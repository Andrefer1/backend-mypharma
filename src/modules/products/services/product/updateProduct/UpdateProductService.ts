import { Product } from "../../../models/Product";
import { IProductsRepository } from "../../../repositories/IProductsRepository";
import AppError from "../../../../../errors/AppError";

class UpdateProductService {
    constructor(private productsRepository: IProductsRepository) {}

    async execute({
        id,
        name,
        description,
        price,
        stock,
        category,
        brand,
    }: Product): Promise<void> {
        const productFound = await this.productsRepository.findByName(name);

        if (productFound) {
            if (id !== productFound.id) {
                throw new AppError("Product already exists!", 409);
            }
        }

        const product = await this.productsRepository.update({
            id,
            name,
            description,
            price,
            stock,
            category,
            brand,
        });

        if (!product) {
            throw new AppError("This product does not exist!", 404);
        }
    }
}

export { UpdateProductService };
