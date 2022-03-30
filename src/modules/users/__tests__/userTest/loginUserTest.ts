import request from "supertest";

import { app } from "../../../../server";

const loginUserTest = () => {
    describe("[POST] /auth/login", () => {
        it("Deve ser capaz de acessar o sistema", async () => {
            const { body } = await request(app)
                .post("/auth/login")
                .send({
                    email: "fulano@gmail.com",
                    password: "123456",
                })
                .expect(200);

            expect(body).toMatchObject({
                _id: body._id,
                name: "Fulano",
                email: "fulano@gmail.com",
                password: body.password,
            });
        });

        it("Não deve ser capaz de acessar, pois o e-mail não está cadastrado", async () => {
            const { body } = await request(app)
                .post("/auth/login")
                .send({
                    email: "ciclano@gmail.com",
                    password: "123",
                })
                .expect(404);

            expect(body).toMatchObject({
                message: "User not found!",
                statusCode: 404,
            });
        });

        it("Não deve ser capaz de acessar, pois a senha é inválida", async () => {
            const { body } = await request(app)
                .post("/auth/login")
                .send({
                    email: "fulano@gmail.com",
                    password: "1234",
                })
                .expect(401);

            expect(body).toMatchObject({
                message: "Password invalid!",
                statusCode: 401,
            });
        });
    });
};

export default loginUserTest;
