"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var database_1 = __importDefault(require("./database"));
var routes_1 = require("./routes");
var AppError_1 = __importDefault(require("./errors/AppError"));
var app = (0, express_1.default)();
database_1.default.createConnection();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(routes_1.router);
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.default) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }
    console.error(err);
    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});
app.listen(process.env.PORT || 3333, function () { return console.log("Server is running!"); });
