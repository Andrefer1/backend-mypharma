import { Router } from "express";

import { userRoutes } from "./user.routes";
import { categoriesRoutes } from "./categories.routes";
import { brandsRoutes } from "./brands.routes";
import { productsRoutes } from "./products.routes";

const router = Router();

router.use("/auth", userRoutes);
router.use("/categories", categoriesRoutes);
router.use("/brands", brandsRoutes);
router.use("/products", productsRoutes);

export { router };
