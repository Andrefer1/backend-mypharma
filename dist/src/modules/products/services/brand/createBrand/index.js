"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBrandController = void 0;
var BrandsRepository_1 = require("../../../repositories/implementations/BrandsRepository");
var CreateBrandController_1 = require("./CreateBrandController");
var CreateBrandService_1 = require("./CreateBrandService");
var brandsRepository = BrandsRepository_1.BrandsRepository.getInstance();
var createBrandService = new CreateBrandService_1.CreateBrandService(brandsRepository);
var createBrandController = new CreateBrandController_1.CreateBrandController(createBrandService);
exports.createBrandController = createBrandController;
