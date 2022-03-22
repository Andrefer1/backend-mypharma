import { v4 as uuidV4 } from "uuid";

import { Product } from "../../models/Product";
import { Product as ProductSchema } from "../../../../database/models/Product";
import {
    IProductsRepository,
    ICreateProductDTO,
    IUpdateProductDTO,
} from "../IProductsRepository";

class ProductsRepository implements IProductsRepository {
    private static INSTANCE: ProductsRepository;

    public static getInstance(): ProductsRepository {
        if (!ProductsRepository.INSTANCE) {
            return (ProductsRepository.INSTANCE = new ProductsRepository());
        }

        return ProductsRepository.INSTANCE;
    }

    async list(): Promise<Product[]> {
        return await ProductSchema.find({});
    }

    async create({
        name,
        description,
        price,
        stock,
        category,
        brand,
    }: ICreateProductDTO): Promise<Product> {
        const product = new ProductSchema({
            _id: uuidV4(),
            name,
            description,
            price,
            stock,
            category,
            brand,
        });

        return await product.save();
    }

    async update({
        id,
        name,
        description,
        price,
        stock,
        category,
        brand,
    }: IUpdateProductDTO): Promise<Product> {
        return await ProductSchema.findByIdAndUpdate(id, {
            name,
            description,
            price,
            stock,
            category,
            brand,
        });
    }

    async delete(id: string): Promise<Product> {
        return await ProductSchema.findOneAndDelete({ _id: id });
    }

    async searchProducts(name: string): Promise<Product[]> {
        const filteredBrands = await ProductSchema.find({
            name: { $regex: name },
        });

        return filteredBrands;
    }

    async findById(id: string): Promise<Product> {
        return await ProductSchema.findById(id);
    }

    async findByName(name: string): Promise<Product> {
        return await ProductSchema.findOne({ name: name });
    }
}

export { ProductsRepository };
