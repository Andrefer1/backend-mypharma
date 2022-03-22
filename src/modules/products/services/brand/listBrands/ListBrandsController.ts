import { Request, Response } from "express";
import { ListBrandsService } from "./ListBrandsService";

class ListBrandsController {
    constructor(private listBrandService: ListBrandsService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const brands = await this.listBrandService.execute();

            return response.status(200).json(brands);
        } catch (error) {
            return response.send(error);
        }
    }
}

export { ListBrandsController };
