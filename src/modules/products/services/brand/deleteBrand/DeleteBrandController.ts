import { Request, Response } from "express";
import { DeleteBrandService } from "./DeleteBrandService";

class DeleteBrandController {
    constructor(private deleteBrandService: DeleteBrandService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deleteBrandService.execute(id);

            return response.status(204).send();
        } catch (error) {
            return response.send(error);
        }
    }
}

export { DeleteBrandController };
