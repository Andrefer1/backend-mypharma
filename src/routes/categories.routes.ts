import { Router } from "express";
import { listCategoriesController } from "../modules/products/services/category/listCategories";
import { searchCategoriesController } from "../modules/products/services/category/searchCategories";
import { createCategoryController } from "../modules/products/services/category/createCategory";
import { updateCategoryController } from "../modules/products/services/category/updateCategory";
import { deleteCategoryController } from "../modules/products/services/category/deleteCategory";

const categoriesRoutes = Router();

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.get("/search", (request, response) => {
    return searchCategoriesController.handle(request, response);
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.put("/:id", (request, response) => {
    return updateCategoryController.handle(request, response);
});

categoriesRoutes.delete("/:id", (request, response) => {
    return deleteCategoryController.handle(request, response);
});

export { categoriesRoutes };
