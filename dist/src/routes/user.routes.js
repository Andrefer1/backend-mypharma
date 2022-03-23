"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var express_1 = require("express");
var login_1 = require("../modules/users/services/user/login");
var createUser_1 = require("../modules/users/services/user/createUser");
var userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post("/login", function (request, response) {
    return login_1.loginController.handle(request, response);
});
userRoutes.post("/register", function (request, response) {
    return createUser_1.createUserController.handle(request, response);
});
