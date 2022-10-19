import { Router, Response, Request } from "express";
import Jwt from "../middlewares/jwt";
import jwt from "jsonwebtoken";

import { sign } from "jsonwebtoken";

import { create_user, connection } from "../utils/db";

const router: Router = Router();

router.get("/", Jwt.Read, (req: Request, res: Response) => {
  res.send(req.user);
});

router.post("/signup", (req: Request, res: Response) => {
  const { name, age, email, password } = req.body;
  if (name == null || age == null || email == null || password == null)
    return res.status(400).send("400: Bad request, missing data");

  connection.query(
    `SELECT * FROM users WHERE email = '${email}'`,
    (err, result: any) => {
      if (err) throw err;
      if (result.length > 0)
        return res.status(400).send("400: Bad request, email already in use");
      create_user({ name, age, email, password });
      const token = sign({ name, email }, process.env.JWT_SECRET);
      res.cookie("jwt", token, { httpOnly: true }).send("User created");
    }
  );
});

router.post("/signin", (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email == null || password == null)
    return res.status(400).send("400: Bad request, missing data");

  connection.query(
    `SELECT * FROM users WHERE email = '${email}'`,
    (err, result: any) => {
      if (err) throw err;
      if (result.length == 0)
        return res.status(400).send("400: Bad request, email not found");
      if (result[0].password != password)
        return res.status(400).send("400: Bad request, wrong password");
      const token = sign(
        { name: result[0].name, email, id: result[0].id },
        process.env.JWT_SECRET
      );
      res.cookie("jwt", token, { httpOnly: true }).send("User logged in");
    }
  );
});

router.get("/verify", (req: Request, res: Response) => {
  const token: string = req.cookies.jwt as string;

  if (!token) return res.status(401).send("401: Access denied no token");
  if (jwt.verify(token, process.env.JWT_SECRET) == null)
    return res.status(401).send("401: Access denied invalid token");
  res.send(jwt.decode(token));
});

export default router;
