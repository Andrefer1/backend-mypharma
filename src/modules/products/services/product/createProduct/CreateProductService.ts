import { Product } from "../../../models/Product";
import { IProductsRepository } from "../../../repositories/IProductsRepository";
import AppError from "../../../../../errors/AppError";

class CreateProductService {
    constructor(private productsRepository: IProductsRepository) {}

    async execute({
        name,
        description,
        price,
        stock,
        category,
        brand,
    }: Omit<Product, "id">): Promise<Product> {
        const productAlreadyExists = await this.productsRepository.findByName(
            name
        );

        if (productAlreadyExists) {
            throw new AppError("Product already exists!", 409);
        }

        const product = {
            name,
            description,
            price,
            stock,
            category,
            brand,
        };

        return await this.productsRepository.create(product);
    }
}

export { CreateProductService };
