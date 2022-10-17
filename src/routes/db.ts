import { Router, Request, Response } from "express";

const router = Router();

import { DB } from "../db";

const db = new DB();

router.get("/", (req: Request, res: Response) => {
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
  });
  res.send("Hello World!");
});

export default router;
