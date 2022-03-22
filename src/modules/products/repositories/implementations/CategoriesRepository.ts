import { v4 as uuidV4 } from "uuid";

import { Category } from "../../models/Category";
import { Category as CategorySchema } from "../../../../database/models/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
    IUpdateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private static INSTANCE: CategoriesRepository;

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            return (CategoriesRepository.INSTANCE = new CategoriesRepository());
        }

        return CategoriesRepository.INSTANCE;
    }

    async list(): Promise<Category[]> {
        return await CategorySchema.find({});
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
        const category = new CategorySchema({
            _id: uuidV4(),
            name,
            description,
        });

        return await category.save();
    }

    async update({
        id,
        name,
        description,
    }: IUpdateCategoryDTO): Promise<Category> {
        return await CategorySchema.findByIdAndUpdate(id, {
            name: name,
            description: description,
        });
    }

    async delete(id: string): Promise<Category> {
        return await CategorySchema.findOneAndDelete({ _id: id });
    }

    async searchCategories(name: string): Promise<Category[]> {
        const filteredCategories = await CategorySchema.find({
            name: { $regex: name },
        });

        return filteredCategories;
    }

    async findById(id: string): Promise<Category> {
        return await CategorySchema.findById(id);
    }

    async findByName(name: string): Promise<Category> {
        return await CategorySchema.findOne({ name: name });
    }
}

export { CategoriesRepository };
