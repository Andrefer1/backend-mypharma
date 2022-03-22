"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
var CreateUserController = /** @class */ (function () {
    function CreateUserController(createdUserService) {
        this.createdUserService = createdUserService;
    }
    CreateUserController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, email = _a.email, password = _a.password, confirmPassword = _a.confirmPassword;
        this.createdUserService.execute({
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        });
        // if (!user) {
        //     return response.status(user.status).send({ msg: user.msg });
        // }
        return response
            .status(201)
            .send({ msg: "Usuário criado com sucesso!" });
    };
    return CreateUserController;
}());
exports.CreateUserController = CreateUserController;
