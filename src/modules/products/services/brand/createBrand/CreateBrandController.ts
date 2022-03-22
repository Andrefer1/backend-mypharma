import { Request, Response } from "express";
import { CreateBrandService } from "./CreateBrandService";

class CreateBrandController {
    constructor(private createBrandService: CreateBrandService) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        try {
            const brand = await this.createBrandService.execute(name);

            return response.status(201).send(brand);
        } catch (error) {
            return response.status(error.statusCode).send(error);
        }
    }
}

export { CreateBrandController };
