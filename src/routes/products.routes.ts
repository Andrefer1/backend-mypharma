import { Router } from "express";
import { listProductsController } from "../modules/products/services/Product/listProducts";
import { searchProductsController } from "../modules/products/services/Product/searchProducts";
import { createProductController } from "../modules/products/services/Product/createProduct";
import { updateProductController } from "../modules/products/services/Product/updateProduct";
import { deleteProductController } from "../modules/products/services/Product/deleteProduct";

const productsRoutes = Router();

productsRoutes.get("/", (request, response) => {
    return listProductsController.handle(request, response);
});

productsRoutes.get("/search", (request, response) => {
    return searchProductsController.handle(request, response);
});

productsRoutes.post("/", (request, response) => {
    return createProductController.handle(request, response);
});

productsRoutes.put("/:id", (request, response) => {
    return updateProductController.handle(request, response);
});

productsRoutes.delete("/:id", (request, response) => {
    return deleteProductController.handle(request, response);
});

export { productsRoutes };
