import { Request, Response } from "express";
import { CreateCategoryService } from "./CreateCategoryService";

class CreateCategoryController {
    constructor(private createCategoryService: CreateCategoryService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        try {
            const category = await this.createCategoryService.execute({
                name,
                description,
            });

            return response.status(201).send(category);
        } catch (error) {
            console.log(error);
            return response.status(error.statusCode).send(error);
        }
    }
}

export { CreateCategoryController };
