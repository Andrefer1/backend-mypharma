import request from "supertest";
import { v4 as uuidV4 } from "uuid";

import { app } from "../../../../server";
import { Category as CategorySchema } from "../../../../database/models/Category";

const updateCategoryTest = () => {
    describe("[PUT] /categories/:id", () => {
        const _id = uuidV4();

        beforeAll(async () => {
            await new CategorySchema({
                _id,
                name: "Cupê",
                description: "Carro cupê",
            }).save();
        });

        afterAll(async () => {
            await CategorySchema.findByIdAndRemove(_id);
        });

        it("Deve ser capaz de atualizar uma categoria", async () => {
            await request(app)
                .put(`/categories/${_id}`)
                .send({
                    name: "Minivan",
                    description: "Carro minivan",
                })
                .expect(204);
        });

        it("Não deve ser capaz de atualizar uma categoria, pois a categoria já existe", async () => {
            const { body } = await request(app)
                .put(`/categories/${_id}`)
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

        it("Não deve ser capaz de atualizar uma categoria, pois a categoria não existe", async () => {
            const { body } = await request(app)
                .put("/categories/3")
                .send({
                    name: "Perua",
                    description: "Carro perua",
                })
                .expect(404);

            expect(body).toMatchObject({
                message: "This category does not exist!",
                statusCode: 404,
            });
        });
    });
};

export default updateCategoryTest;
