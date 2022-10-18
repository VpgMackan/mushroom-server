import { Router, Response, Request } from "express";
import Jwt from "../middlewares/jwt";

import { sign } from "jsonwebtoken";

import { create_user } from "../utils/db";

const router: Router = Router();

router.get("/", Jwt.Read, (req: Request, res: Response) => {
  res.send(req.user);
});

router.post("/signup", (req: Request, res: Response) => {
  const { name, age, email, password } = req.body;

  const data = create_user({ name, age, email, password });

  res.cookie("jwt", sign()).send("User created");
});

export default router;
