import { BrandsRepository } from "../../../repositories/implementations/BrandsRepository";
import { CreateBrandController } from "./CreateBrandController";
import { CreateBrandService } from "./CreateBrandService";

const brandsRepository = BrandsRepository.getInstance();
const createBrandService = new CreateBrandService(brandsRepository);
const createBrandController = new CreateBrandController(createBrandService);

export { createBrandController };
