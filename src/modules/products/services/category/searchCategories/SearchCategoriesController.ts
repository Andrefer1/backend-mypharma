import { Request, Response } from "express";
import { SearchCategoriesService } from "./SearchCategoriesService";

class SearchCategoriesController {
    constructor(private searchCategoryService: SearchCategoriesService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.query;

        try {
            const categoriesFiltered = await this.searchCategoryService.execute(
                String(name)
            );

            return response.status(200).json(categoriesFiltered);
        } catch (error) {
            return response.send(error);
        }
    }
}

export { SearchCategoriesController };
