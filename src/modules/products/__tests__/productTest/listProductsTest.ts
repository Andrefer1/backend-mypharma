import request from "supertest";

import { app } from "../../../../server";
import { Product as ProductSchema } from "../../../../database/models/Product";

const listCategoriesTest = () => {
    describe("[GET] /products", () => {
        let productList: typeof ProductSchema[] = [];

        beforeAll(async () => {
            productList = await ProductSchema.find({});
        });

        it("Deve ser capaz de listar os produtos", async () => {
            const { body } = await request(app).get("/products").expect(200);

            expect(body === productList);
        });
    });
};

export default listCategoriesTest;
