import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { SearchCategoriesController } from "./SearchCategoriesController";
import { SearchCategoriesService } from "./SearchCategoriesService";

const categoriesRepository = CategoriesRepository.getInstance();
const searchCategoriesService = new SearchCategoriesService(
    categoriesRepository
);
const searchCategoriesController = new SearchCategoriesController(
    searchCategoriesService
);

export { searchCategoriesController };
