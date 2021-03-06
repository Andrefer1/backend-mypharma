import { Request, Response } from "express";
import { UpdateBrandService } from "./UpdateBrandService";

class UpdateBrandController {
    constructor(private updateBrandService: UpdateBrandService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name } = request.body;

        try {
            await this.updateBrandService.execute({ id, name });

            return response.status(204).send();
        } catch (error) {
            return response.status(error.statusCode).send(error);
        }
    }
}

export { UpdateBrandController };
