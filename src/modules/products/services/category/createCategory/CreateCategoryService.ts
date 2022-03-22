import { Category } from "../../../models/Category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";
import AppError from "../../../../../errors/AppError";

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute({
        name,
        description,
    }: Omit<Category, "id">): Promise<Category> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new AppError("Category already exists!", 409);
        }

        return await this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
