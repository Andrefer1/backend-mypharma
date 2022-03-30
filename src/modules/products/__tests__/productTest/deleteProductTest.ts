import request from "supertest";
import { v4 as uuidV4 } from "uuid";

import { app } from "../../../../server";
import { Product as ProductSchema } from "../../../../database/models/Product";

const deleteProductTest = () => {
    describe("[DELETE] /products/:id", () => {
        const _id = uuidV4();

        beforeAll(async () => {
            await new ProductSchema({
                _id,
                name: "Huracan",
                description: "Descrição Huracan",
                price: 120000,
                stock: 15,
                category: "Hatch",
                brand: "Lamborghini",
            }).save();
        });

        afterAll(async () => {
            await ProductSchema.findByIdAndDelete(_id);
        });

        it("Deve ser capaz de deletar um produto", async () => {
            await request(app).put(`/products/${_id}`).expect(204);
        });
    });
};
export default deleteProductTest;
