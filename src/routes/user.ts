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

  create_user({ name, age, email, password })
    .catch((err) => {
      if (err) res.status(400).send(err);
    })
    .then((data) => {
      res
        .cookie("jwt", sign({data}, process.env.JWT_SECRET), {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24,
        })
        .send("User created");
    });
});

export default router;
