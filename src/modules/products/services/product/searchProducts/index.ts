import { ProductsRepository } from "../../../repositories/implementations/ProductsRepository";
import { SearchProductsController } from "./SearchProductsController";
import { SearchProductsService } from "./SearchProductsService";

const productsRepository = ProductsRepository.getInstance();
const searchProductsService = new SearchProductsService(productsRepository);
const searchProductsController = new SearchProductsController(
    searchProductsService
);

export { searchProductsController };
