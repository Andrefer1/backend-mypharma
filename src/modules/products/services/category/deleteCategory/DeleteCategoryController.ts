import { Request, Response } from "express";
import { DeleteCategoryService } from "./DeleteCategoryService";

class DeleteCategoryController {
    constructor(private deleteCategoryService: DeleteCategoryService) {}

    handle(request: Request, response: Response): Response {
        const { id } = request.params;

        try {
            this.deleteCategoryService.execute(id);

            return response.status(204).send();
        } catch (error) {
            return response.send(error);
        }
    }
}

export { DeleteCategoryController };
