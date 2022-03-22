import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

class DeleteCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute(id: string): Promise<void> {
        await this.categoriesRepository.delete(id);
    }
}

export { DeleteCategoryService };
