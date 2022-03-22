import { BrandsRepository } from "../../../repositories/implementations/BrandsRepository";
import { ListBrandsController } from "./ListBrandsController";
import { ListBrandsService } from "./ListBrandsService";

const brandsRepository = BrandsRepository.getInstance();
const listBrandService = new ListBrandsService(brandsRepository);
const listBrandsController = new ListBrandsController(listBrandService);

export { listBrandsController };
