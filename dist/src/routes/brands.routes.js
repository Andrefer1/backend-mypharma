"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandsRoutes = void 0;
var express_1 = require("express");
var listBrands_1 = require("../modules/products/services/brand/listBrands");
var searchBrands_1 = require("../modules/products/services/brand/searchBrands");
var createBrand_1 = require("../modules/products/services/brand/createBrand");
var updateBrand_1 = require("../modules/products/services/brand/updateBrand");
var deleteBrand_1 = require("../modules/products/services/brand/deleteBrand");
var brandsRoutes = (0, express_1.Router)();
exports.brandsRoutes = brandsRoutes;
brandsRoutes.get("/", function (request, response) {
    return listBrands_1.listBrandsController.handle(request, response);
});
brandsRoutes.get("/search", function (request, response) {
    return searchBrands_1.searchBrandsController.handle(request, response);
});
brandsRoutes.post("/", function (request, response) {
    return createBrand_1.createBrandController.handle(request, response);
});
brandsRoutes.put("/:id", function (request, response) {
    return updateBrand_1.updateBrandController.handle(request, response);
});
brandsRoutes.delete("/:id", function (request, response) {
    return deleteBrand_1.deleteBrandController.handle(request, response);
});
