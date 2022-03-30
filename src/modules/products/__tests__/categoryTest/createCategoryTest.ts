import request from "supertest";

import { app } from "../../../../server";
import { Category as CategorySchema } from "../../../../database/models/Category";

const createCategoryTest = () => {
    describe("[POST] /categories", () => {
        afterAll(async () => {
            await CategorySchema.deleteOne({ name: "Cupê" });
        });

        it("Deve ser capaz de criar uma categoria", async () => {
            const { body } = await request(app)
                .post("/categories")
                .send({
                    name: "Cupê",
                    description: "Carro cupê",
                })
                .expect(201);

            expect(body).toMatchObject({
                _id: body._id,
                name: "Cupê",
                description: "Carro cupê",
            });
        });

        it("Não deve ser capaz de criar uma categoria, pois a categoria já existe", async () => {
            const { body } = await request(app)
                .post("/categories")
                .send({
                    name: "Sedan",
                    description: "Carro sedan",
                })
                .expect(409);

            expect(body).toMatchObject({
                message: "Category already exists!",
                statusCode: 409,
            });
        });
    });
};

export default createCategoryTest;
