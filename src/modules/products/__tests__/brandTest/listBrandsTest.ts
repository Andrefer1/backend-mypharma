import request from "supertest";

import { app } from "../../../../server";
import { Brand as BrandSchema } from "../../../../database/models/Brand";

const listBrandsTest = () => {
    describe("[GET] /brands", () => {
        let brandList: typeof BrandSchema[] = [];

        beforeAll(async () => {
            brandList = await BrandSchema.find({});
        });

        it("Deve ser capaz de listar as marcas", async () => {
            const { body } = await request(app).get("/brands").expect(200);

            expect(body === brandList);
        });
    });
};

export default listBrandsTest;
