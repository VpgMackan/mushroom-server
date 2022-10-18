import { Router, Response, Request } from "express";

const router: Router = Router();

import { generate_table } from "../utils/db";

router.get("/", (req: Request, res: Response) => {
  generate_table({
    name: "bord",
    columns: [{ name: "bord", type: "varchar(4)", notnull: true }],
    primary_key: "bord",
  });
  res.send("Hello World!");
});

export default router;
