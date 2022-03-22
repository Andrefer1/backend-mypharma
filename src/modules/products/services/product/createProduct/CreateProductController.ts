import { Request, Response } from "express";
import { CreateProductService } from "./CreateProductService";

class CreateProductController {
    constructor(private createProductService: CreateProductService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, price, stock, category, brand } =
            request.body;

        try {
            const product = await this.createProductService.execute({
                name,
                description,
                price,
                stock,
                category,
                brand,
            });

            return response.status(201).send(product);
        } catch (error) {
            return response.status(error.statusCode).send(error);
        }
    }
}

export { CreateProductController };
