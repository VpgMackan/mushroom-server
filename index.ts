import { connection } from "./src/utils/db";
connection.connect((err: any) => {
  if (err) throw err;
  console.log("Connected to database");
});

require("better-logging")(console);

import dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";
const app: Express = express();
app.use(express.json());

import cookieParser from "cookie-parser";
app.use(cookieParser());

import router from "./src/router";
app.use("/api", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.info(`Server is running at https://localhost:${port}`);
});
