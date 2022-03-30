import request from "supertest";
import { v4 as uuidV4 } from "uuid";

import { app } from "../../../../server";
import { Brand as BrandSchema } from "../../../../database/models/Brand";

const createBrandTest = () => {
    describe("[POST] /brands", () => {
        afterAll(async () => {
            await BrandSchema.deleteOne({ name: "Gurgel" });
        });

        it("Deve ser capaz de criar uma marca", async () => {
            const { body } = await request(app)
                .post("/brands")
                .send({
                    name: "Gurgel",
                })
                .expect(201);

            expect(body).toMatchObject({
                _id: body._id,
                name: "Gurgel",
            });
        });

        it("Não deve ser capaz de criar uma marca, pois a marca já existe", async () => {
            const { body } = await request(app)
                .post("/brands")
                .send({
                    name: "Ferrari",
                })
                .expect(409);

            expect(body).toMatchObject({
                message: "Brand already exists!",
                statusCode: 409,
            });
        });
    });
};

export default createBrandTest;
