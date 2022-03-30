import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

import mongoose from "./database";
import { router } from "./routes";
import AppError from "./errors/AppError";

const app = express();

mongoose.createConnection();

app.use(express.json());
app.use(cors());
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

export { app };
