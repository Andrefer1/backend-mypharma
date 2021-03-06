"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductController = void 0;
var ProductsRepository_1 = require("../../../repositories/implementations/ProductsRepository");
var DeleteProductController_1 = require("./DeleteProductController");
var DeleteProductService_1 = require("./DeleteProductService");
var productsRepository = ProductsRepository_1.ProductsRepository.getInstance();
var deleteProductService = new DeleteProductService_1.DeleteProductService(productsRepository);
var deleteProductController = new DeleteProductController_1.DeleteProductController(deleteProductService);
exports.deleteProductController = deleteProductController;
