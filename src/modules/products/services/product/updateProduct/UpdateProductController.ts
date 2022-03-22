import { Request, Response } from "express";
import { UpdateProductService } from "./UpdateProductService";

class UpdateProductController {
    constructor(private updateProductService: UpdateProductService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, description, price, stock, category, brand } =
            request.body;

        try {
            const product = await this.updateProductService.execute({
                id,
                name,
                description,
                price,
                stock,
                category,
                brand,
            });

            return response.status(204).send(product);
        } catch (error) {
            return response.status(error.statusCode).send(error);
        }
    }
}

export { UpdateProductController };
