import { BrandsRepository } from "../../../repositories/implementations/BrandsRepository";
import { UpdateBrandController } from "./UpdateBrandController";
import { UpdateBrandService } from "./UpdateBrandService";

const brandsRepository = BrandsRepository.getInstance();
const updateBrandService = new UpdateBrandService(brandsRepository);
const updateBrandController = new UpdateBrandController(updateBrandService);

export { updateBrandController };
