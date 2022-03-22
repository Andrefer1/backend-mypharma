"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var mongoose_1 = __importDefault(require("mongoose"));
var dbUser = process.env.DB_USER;
var dbPassword = process.env.DB_PASSWORD;
mongoose_1.default
    .connect("mongodb+srv://".concat(dbUser, ":").concat(dbPassword, "@cluster0.vhvta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"))
    .then(function () { return console.log("Connected database!"); })
    .catch(function (err) { return console.log(err); });
mongoose_1.default.Promise = global.Promise;
exports.default = mongoose_1.default;
