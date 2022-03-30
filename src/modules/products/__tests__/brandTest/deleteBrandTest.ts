import request from "supertest";
import { v4 as uuidV4 } from "uuid";

import { app } from "../../../../server";
import { Brand as BrandSchema } from "../../../../database/models/Brand";

const deleteBrandTest = () => {
    describe("[DELETE] /brands/:id", () => {
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

        it("Deve ser capaz de deletar uma marca", async () => {
            await request(app).delete(`/brands/${_id}`).expect(204);
        });
    });
};

export default deleteBrandTest;
