import { BrandsRepository } from "../../../repositories/implementations/BrandsRepository";
import { SearchBrandsController } from "./SearchBrandsController";
import { SearchBrandsService } from "./SearchBrandsService";

const brandsRepository = BrandsRepository.getInstance();
const searchBrandsService = new SearchBrandsService(brandsRepository);
const searchBrandsController = new SearchBrandsController(searchBrandsService);

export { searchBrandsController };
