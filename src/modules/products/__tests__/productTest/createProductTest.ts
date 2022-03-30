import request from "supertest";

import { app } from "../../../../server";
import { Product as ProductSchema } from "../../../../database/models/Product";

const createProductTest = () => {
    describe("[POST] /products", () => {
        const newProduct = {
            name: "Huracan",
            description: "Descrição Huracan",
            price: 120000,
            stock: 15,
            category: "Hatch",
            brand: "Lamborghini",
        };

        afterAll(async () => {
            await ProductSchema.deleteOne({ name: "Huracan" });
        });

        it("Deve ser capaz de criar um produto", async () => {
            const { body } = await request(app)
                .post("/products")
                .send(newProduct)
                .expect(201);

            expect(body).toMatchObject({
                ...newProduct,
                _id: body._id,
            });
        });

        it("Não deve ser capaz de criar um produto, pois o produto já existe", async () => {
            const { body } = await request(app)
                .post("/products")
                .send({
                    ...newProduct,
                    name: "Urus",
                })
                .expect(409);

            expect(body).toMatchObject({
                message: "Product already exists!",
                statusCode: 409,
            });
        });
    });
};

export default createProductTest;
