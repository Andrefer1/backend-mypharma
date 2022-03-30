import AppError from "../../../../../errors/AppError";
import { Category } from "../../../models/Category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

class UpdateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute({ id, name, description }: Category): Promise<void> {
        const categoryFound = await this.categoriesRepository.findByName(name);

        if (categoryFound) {
            if (id !== categoryFound.id) {
                throw new AppError("Category already exists!", 409);
            }
        }

        const category = await this.categoriesRepository.update({
            id,
            name,
            description,
        });

        if (!category) {
            throw new AppError("This category does not exist!", 404);
        }
    }
}

export { UpdateCategoryService };
