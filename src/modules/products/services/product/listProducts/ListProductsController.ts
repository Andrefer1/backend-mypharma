import { Request, Response } from "express";
import { ListProductsService } from "./ListProductsService";

class ListProductsController {
    constructor(private listProductsService: ListProductsService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const products = await this.listProductsService.execute();

        try {
            return response.status(200).json(products);
        } catch (error) {
            return response.send(error);
        }
    }
}

export { ListProductsController };
