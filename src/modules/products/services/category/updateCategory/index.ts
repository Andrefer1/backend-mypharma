import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { UpdateCategoryController } from "./UpdateCategoryController";
import { UpdateCategoryService } from "./UpdateCategoryService";

const categoriesRepository = CategoriesRepository.getInstance();
const updateCategoryService = new UpdateCategoryService(categoriesRepository);
const updateCategoryController = new UpdateCategoryController(
    updateCategoryService
);

export { updateCategoryController };
