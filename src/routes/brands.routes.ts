import { Router } from "express";
import { listBrandsController } from "../modules/products/services/brand/listBrands";
import { searchBrandsController } from "../modules/products/services/brand/searchBrands";
import { createBrandController } from "../modules/products/services/brand/createBrand";
import { updateBrandController } from "../modules/products/services/brand/updateBrand";
import { deleteBrandController } from "../modules/products/services/brand/deleteBrand";

const brandsRoutes = Router();

brandsRoutes.get("/", (request, response) => {
    return listBrandsController.handle(request, response);
});

brandsRoutes.get("/search", (request, response) => {
    return searchBrandsController.handle(request, response);
});

brandsRoutes.post("/", (request, response) => {
    return createBrandController.handle(request, response);
});

brandsRoutes.put("/:id", (request, response) => {
    return updateBrandController.handle(request, response);
});

brandsRoutes.delete("/:id", (request, response) => {
    return deleteBrandController.handle(request, response);
});

export { brandsRoutes };
