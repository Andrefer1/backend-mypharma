import request from "supertest";
import { v4 as uuidV4 } from "uuid";

import { app } from "../../../../server";
import { Product as ProductSchema } from "../../../../database/models/Product";

const updateProductTest = () => {
    describe("[PUT] /products/:id", () => {
        const product = {
            name: "Huracan",
            description: "Descrição Huracan",
            price: 120000,
            stock: 15,
            category: "Hatch",
            brand: "Lamborghini",
        };

        const _id = uuidV4();

        beforeAll(async () => {
            await new ProductSchema({
                ...product,
                _id,
            }).save();
        });

        afterAll(async () => {
            await ProductSchema.findByIdAndDelete(_id);
        });

        it("Deve ser capaz de atualizar um produto", async () => {
            await request(app)
                .put(`/products/${_id}`)
                .send({
                    ...product,
                    category: "Sedan",
                })
                .expect(204);
        });

        it("Não deve ser capaz de atualizar um produto, pois o produto já existe", async () => {
            const { body } = await request(app)
                .put(`/products/${_id}`)
                .send({
                    ...product,
                    name: "Urus",
                })
                .expect(409);

            expect(body).toMatchObject({
                message: "Product already exists!",
                statusCode: 409,
            });
        });

        it("Não deve ser capaz de atualizar um produto, pois o produto não existe", async () => {
            const { body } = await request(app)
                .put("/products/3")
                .send({
                    ...product,
                    name: "Gallardo",
                    description: "Descrição da Gallardo",
                })
                .expect(404);

            expect(body).toMatchObject({
                message: "This product does not exist!",
                statusCode: 404,
            });
        });
    });
};

export default updateProductTest;
