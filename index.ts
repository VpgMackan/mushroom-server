import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { DB } from "./src/db";

require("better-logging")(console);

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const db = new DB();

console.log(
  db.generate_table({
    name: "users",
    columns: [
      { name: "name", type: "varchar(20)", notnull: true },
      { name: "age", type: "int(2)", notnull: true },
      { name: "email", type: "varchar(50)", notnull: true },
      { name: "password", type: "varchar(100)", notnull: true },
      { name: "id", type: "varchar(36)", notnull: true },
    ],
    primary_key: "id",
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Pog Champ");
});

app.listen(port, () => {
  console.info(`Server is running at https://localhost:${port}`);
});
