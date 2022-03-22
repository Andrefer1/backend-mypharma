import { Category } from "../../../models/Category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

class SearchCategoriesService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute(name: string): Promise<Category[]> {
        return await this.categoriesRepository.searchCategories(name);
    }
}

export { SearchCategoriesService };
