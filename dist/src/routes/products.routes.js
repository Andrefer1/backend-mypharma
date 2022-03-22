"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
var express_1 = require("express");
var listProducts_1 = require("../modules/products/services/Product/listProducts");
var searchProducts_1 = require("../modules/products/services/Product/searchProducts");
var createProduct_1 = require("../modules/products/services/Product/createProduct");
var updateProduct_1 = require("../modules/products/services/Product/updateProduct");
var deleteProduct_1 = require("../modules/products/services/Product/deleteProduct");
var productsRoutes = (0, express_1.Router)();
exports.productsRoutes = productsRoutes;
productsRoutes.get("/", function (request, response) {
    return listProducts_1.listProductsController.handle(request, response);
});
productsRoutes.get("/search", function (request, response) {
    return searchProducts_1.searchProductsController.handle(request, response);
});
productsRoutes.post("/", function (request, response) {
    return createProduct_1.createProductController.handle(request, response);
});
productsRoutes.put("/:id", function (request, response) {
    return updateProduct_1.updateProductController.handle(request, response);
});
productsRoutes.delete("/:id", function (request, response) {
    return deleteProduct_1.deleteProductController.handle(request, response);
});
