import { ProductsRepository } from "../../../repositories/implementations/ProductsRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductService } from "./UpdateProductService";

const productsRepository = ProductsRepository.getInstance();
const updateProductService = new UpdateProductService(productsRepository);
const updateProductController = new UpdateProductController(
    updateProductService
);

export { updateProductController };
