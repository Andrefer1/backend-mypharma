import request from "supertest";

import { app } from "../../../../server";
import { Category as CategorySchema } from "../../../../database/models/Category";

const listCategoriesTest = () => {
    describe("[GET] /categories", () => {
        let categoryList: typeof CategorySchema[] = [];

        beforeAll(async () => {
            categoryList = await CategorySchema.find({});
        });

        it("Deve ser capaz de listar as categorias", async () => {
            const { body } = await request(app).get("/categories").expect(200);

            expect(body === categoryList);
        });
    });
};

export default listCategoriesTest;
