"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var listCategories_1 = require("../modules/products/services/category/listCategories");
var searchCategories_1 = require("../modules/products/services/category/searchCategories");
var createCategory_1 = require("../modules/products/services/category/createCategory");
var updateCategory_1 = require("../modules/products/services/category/updateCategory");
var deleteCategory_1 = require("../modules/products/services/category/deleteCategory");
var categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
categoriesRoutes.get("/", function (request, response) {
    return listCategories_1.listCategoriesController.handle(request, response);
});
categoriesRoutes.get("/search", function (request, response) {
    return searchCategories_1.searchCategoriesController.handle(request, response);
});
categoriesRoutes.post("/", function (request, response) {
    return createCategory_1.createCategoryController.handle(request, response);
});
categoriesRoutes.put("/:id", function (request, response) {
    return updateCategory_1.updateCategoryController.handle(request, response);
});
categoriesRoutes.delete("/:id", function (request, response) {
    return deleteCategory_1.deleteCategoryController.handle(request, response);
});
