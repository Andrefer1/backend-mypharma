import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { DeleteCategoryController } from "./DeleteCategoryController";
import { DeleteCategoryService } from "./DeleteCategoryService";

const categoriesRepository = CategoriesRepository.getInstance();
const deleteCategoryService = new DeleteCategoryService(categoriesRepository);
const deleteCategoryController = new DeleteCategoryController(
    deleteCategoryService
);

export { deleteCategoryController };
