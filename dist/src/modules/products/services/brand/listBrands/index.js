"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listBrandsController = void 0;
var BrandsRepository_1 = require("../../../repositories/implementations/BrandsRepository");
var ListBrandsController_1 = require("./ListBrandsController");
var ListBrandsService_1 = require("./ListBrandsService");
var brandsRepository = BrandsRepository_1.BrandsRepository.getInstance();
var listBrandService = new ListBrandsService_1.ListBrandsService(brandsRepository);
var listBrandsController = new ListBrandsController_1.ListBrandsController(listBrandService);
exports.listBrandsController = listBrandsController;
