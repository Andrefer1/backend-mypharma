import { Brand } from "./Brand";
import { Category } from "./Category";

class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    brand: string;

    constructor() {}
}

export { Product };
