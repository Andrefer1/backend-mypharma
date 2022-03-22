import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface IUpdateCategoryDTO extends ICreateCategoryDTO {
    id: string;
}

interface ICategoriesRepository {
    list(): Promise<Category[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<Category>;
    update({ id, name }: IUpdateCategoryDTO): Promise<Category>;
    delete(id: string): Promise<Category>;

    searchCategories(name: string): Promise<Category[]>;
    findById(name: string): Promise<Category>;
    findByName(name: string): Promise<Category>;
}

export {
    Category,
    ICreateCategoryDTO,
    IUpdateCategoryDTO,
    ICategoriesRepository,
};
