"use strict";
// import "dotenv/config";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
// import {
//     createProxyMiddleware,
//     Filter,
//     Options,
//     RequestHandler,
// } from "http-proxy-middleware";
var database_1 = __importDefault(require("./database"));
var routes_1 = require("./routes");
var AppError_1 = __importDefault(require("./errors/AppError"));
var app = (0, express_1.default)();
database_1.default.createConnection();
// const domainsFromEnv = process.env.CORS_DOMAINS || "";
// const whiteList = domainsFromEnv.split(",").map((item) => item.trim());
var whiteList = [
    "http://localhost:3000",
    "http://localhost:3000/auth/login",
    "https://front-end-mypharma.herokuapp.com",
    "https://front-end-mypharma.herokuapp.com/auth/login",
];
var corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
// app.use(cors());
app.use(express_1.default.json());
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
