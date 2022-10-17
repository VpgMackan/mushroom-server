import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import db from "./src/db";

require("better-logging")(console);

dotenv.config();

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

const app: Express = express();
const port = process.env.PORT;

import dbRouter from "./src/routes/db";

app.use("/db", dbRouter);

app.listen(port, () => {
  console.info(`Server is running at https://localhost:${port}`);
});
