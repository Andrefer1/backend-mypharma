import { BrandsRepository } from "../../../repositories/implementations/BrandsRepository";
import { DeleteBrandController } from "./DeleteBrandController";
import { DeleteBrandService } from "./DeleteBrandService";

const brandsRepository = BrandsRepository.getInstance();
const deleteBrandService = new DeleteBrandService(brandsRepository);
const deleteBrandController = new DeleteBrandController(deleteBrandService);

export { deleteBrandController };
