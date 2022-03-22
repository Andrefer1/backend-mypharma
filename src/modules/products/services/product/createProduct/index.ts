import { ProductsRepository } from "../../../repositories/implementations/ProductsRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductService } from "./CreateProductService";

const productsRepository = ProductsRepository.getInstance();
const createProductService = new CreateProductService(productsRepository);
const createProductController = new CreateProductController(
    createProductService
);

export { createProductController };
