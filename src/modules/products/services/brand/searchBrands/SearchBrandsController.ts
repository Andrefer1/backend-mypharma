import { Request, Response } from "express";
import { SearchBrandsService } from "./SearchBrandsService";

class SearchBrandsController {
    constructor(private searchBrandService: SearchBrandsService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.query;

        try {
            const brandsFiltered = await this.searchBrandService.execute(
                String(name)
            );

            return response.status(200).json(brandsFiltered);
        } catch (error) {
            return response.send(error);
        }
    }
}

export { SearchBrandsController };
