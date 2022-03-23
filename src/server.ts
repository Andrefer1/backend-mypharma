// import "dotenv/config";

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
// import {
//     createProxyMiddleware,
//     Filter,
//     Options,
//     RequestHandler,
// } from "http-proxy-middleware";

import mongoose from "./database";
import { router } from "./routes";
import AppError from "./errors/AppError";

const app = express();

mongoose.createConnection();

// const domainsFromEnv = process.env.CORS_DOMAINS || "";

// const whitelist = domainsFromEnv.split(",").map((item) => item.trim());

const whitelist = [
    "http://localhost:3000",
    "http://localhost:3000/auth/login",
    "https://front-end-mypharma.herokuapp.com",
    "https://front-end-mypharma.herokuapp.com/auth/login",
];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));

app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
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
    }
);

app.listen(process.env.PORT || 3333, () => console.log("Server is running!"));
