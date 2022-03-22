import { Request, Response } from "express";
import { DeleteProductService } from "./DeleteProductService";

class DeleteProductController {
    constructor(private deleteProductService: DeleteProductService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            this.deleteProductService.execute(id);

            return response.status(204).send();
        } catch (error) {
            return response.send(error);
        }
    }
}

export { DeleteProductController };
