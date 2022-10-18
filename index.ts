import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { connection } from "./src/utils/db";

import cookieParser from "cookie-parser";

require("better-logging")(console);

dotenv.config();

connection.connect((err: any) => {
  if (err) throw err;
  console.log("Connected to database");
});

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

import dbRouter from "./src/routes/db";
import userRouter from "./src/routes/user";

app.use("/db", dbRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.info(`Server is running at https://localhost:${port}`);
});
