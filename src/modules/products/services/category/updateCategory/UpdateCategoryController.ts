import { Request, Response } from "express";
import { UpdateCategoryService } from "./UpdateCategoryService";

class UpdateCategoryController {
    constructor(private updateCategoryService: UpdateCategoryService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, description } = request.body;

        try {
            const category = await this.updateCategoryService.execute({
                id,
                name,
                description,
            });

            console.log(category);

            return response.status(204).send(category);
        } catch (error) {
            return response.status(error.statusCode).send(error);
        }
    }
}

export { UpdateCategoryController };
