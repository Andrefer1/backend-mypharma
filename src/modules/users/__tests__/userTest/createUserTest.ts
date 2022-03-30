import request from "supertest";

import { app } from "../../../../server";

const createUserTest = () => {
    describe("[POST] /auth/register", () => {
        const newUser = {
            name: "Fulano",
            email: "fulano@gmail.com",
            password: "123456",
            confirmPassword: "123456",
        };

        it("Deve ser capaz de criar um novo usuário", async () => {
            const { body } = await request(app)
                .post("/auth/register")
                .send(newUser)
                .expect(201);

            expect(body).toMatchObject({
                message: "Usuário criado com sucesso!",
            });
        });

        it("Não deve ser capaz de criar um novo usuário, pois o e-mail já está cadastrado", async () => {
            const { body } = await request(app)
                .post("/auth/register")
                .send({
                    ...newUser,
                    email: "andre@gmail.com",
                })
                .expect(409);

            expect(body).toMatchObject({
                message: "This email is already registered!",
                statusCode: 409,
            });
        });

        it("Não deve ser capaz de criar um novo usuário, pois as senhas não combinam", async () => {
            const { body } = await request(app)
                .post("/auth/register")
                .send({
                    ...newUser,
                    email: "ciclano@gmail.com",
                    password: "123",
                    confirmPassword: "1234",
                })
                .expect(400);

            expect(body).toMatchObject({
                message: "Passwords must be the same!",
                statusCode: 400,
            });
        });
    });
};

export default createUserTest;
