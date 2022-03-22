import { Product } from "../models/Product";

interface ICreateProductDTO {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    brand: string;
}

interface IUpdateProductDTO extends ICreateProductDTO {
    id: string;
}

interface IProductsRepository {
    list(): Promise<Product[]>;
    create({
        name,
        description,
        price,
        stock,
        category,
        brand,
    }: ICreateProductDTO): Promise<Product>;
    update({
        id,
        name,
        description,
        price,
        stock,
        category,
        brand,
    }: IUpdateProductDTO): Promise<Product>;
    delete(id: string): Promise<Product>;

    findById(name: string): Promise<Product>;
    findByName(name: string): Promise<Product>;
    searchProducts(name: string): Promise<Product[]>;
}

export { Product, IUpdateProductDTO, ICreateProductDTO, IProductsRepository };
