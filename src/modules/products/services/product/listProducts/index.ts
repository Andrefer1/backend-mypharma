import { ProductsRepository } from "../../../repositories/implementations/ProductsRepository";
import { ListProductsController } from "./ListProductsController";
import { ListProductsService } from "./ListProductsService";

const productsRepository = ProductsRepository.getInstance();
const listProductsService = new ListProductsService(productsRepository);
const listProductsController = new ListProductsController(listProductsService);

export { listProductsController };
