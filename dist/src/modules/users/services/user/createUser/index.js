"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
var UsersRepository_1 = require("../../../repositories/implementations/UsersRepository");
var CreateUserController_1 = require("./CreateUserController");
var CreateUserService_1 = require("./CreateUserService");
var usersRepository = UsersRepository_1.UsersRepository.getInstance();
var createUserService = new CreateUserService_1.CreateUserService(usersRepository);
var createUserController = new CreateUserController_1.CreateUserController(createUserService);
exports.createUserController = createUserController;
