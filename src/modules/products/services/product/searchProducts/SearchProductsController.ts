import { Request, Response } from "express";
import { SearchProductsService } from "./SearchProductsService";

class SearchProductsController {
    constructor(private searchProductService: SearchProductsService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.query;

        try {
            const productsFiltered = await this.searchProductService.execute(
                String(name)
            );

            return response.status(200).json(productsFiltered);
        } catch (error) {
            return response.json(error);
        }
    }
}

export { SearchProductsController };
