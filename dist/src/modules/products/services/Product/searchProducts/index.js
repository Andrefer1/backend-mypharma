"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProductsController = void 0;
var ProductsRepository_1 = require("../../../repositories/implementations/ProductsRepository");
var SearchProductsController_1 = require("./SearchProductsController");
var SearchProductsService_1 = require("./SearchProductsService");
var productsRepository = ProductsRepository_1.ProductsRepository.getInstance();
var searchProductsService = new SearchProductsService_1.SearchProductsService(productsRepository);
var searchProductsController = new SearchProductsController_1.SearchProductsController(searchProductsService);
exports.searchProductsController = searchProductsController;