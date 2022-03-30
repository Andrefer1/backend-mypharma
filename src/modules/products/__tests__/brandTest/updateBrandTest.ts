import request from "supertest";
import { v4 as uuidV4 } from "uuid";

import { app } from "../../../../server";
import { Brand as BrandSchema } from "../../../../database/models/Brand";

const updateBrandTest = () => {
    describe("[PUT] /brands/:id", () => {
        const _id = uuidV4();

        beforeAll(async () => {
            new BrandSchema({
                _id,
                name: "Gurgel",
            }).save();
        });

        afterAll(async () => {
            await BrandSchema.findByIdAndDelete({ _id });
        });

        it("Deve ser capaz de atualizar uma marca", async () => {
            await request(app)
                .put(`/brands/${_id}`)
                .send({
                    name: "McLaren",
                })
                .expect(204);
        });

        it("Não deve ser capaz de atualizar uma marca, pois a marca já existe", async () => {
            const { body } = await request(app)
                .put(`/brands/${_id}`)
                .send({
                    name: "Ferrari",
                })
                .expect(409);

            expect(body).toMatchObject({
                message: "Brand already exists!",
                statusCode: 409,
            });
        });

        it("Não deve ser capaz de atualizar uma marca, pois o _id não existe", async () => {
            const { body } = await request(app)
                .put("/brands/3")
                .send({
                    name: "Porsche",
                })
                .expect(404);

            expect(body).toMatchObject({
                message: "This brand does not exist!",
                statusCode: 404,
            });
        });
    });
};

export default updateBrandTest;
