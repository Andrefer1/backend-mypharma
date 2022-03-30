import request from "supertest";
import { v4 as uuidV4 } from "uuid";

import { app } from "../../../../server";
import { Category as CategorySchema } from "../../../../database/models/Category";

const deleteCategoryTest = () => {
    describe("[DELETE] /categories/:id", () => {
        const _id = uuidV4();

        beforeAll(async () => {
            await new CategorySchema({
                _id,
                name: "Cupê",
                description: "Carro cupê",
            }).save();
        });

        afterAll(async () => {
            await CategorySchema.findByIdAndDelete({ _id });
        });

        it("Deve ser capaz de deletar uma categoria", async () => {
            await request(app).put(`/categories/${_id}`).expect(204);
        });
    });
};
export default deleteCategoryTest;
