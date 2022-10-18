import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

export = {
  Read: (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.cookies.jwt as string;
    if (!token) return res.status(401).send("401: Access denied");

    try {
      const verified: JwtPayload | string = jwt.verify(
        token,
        process.env.JWT_SECRET
      );
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).send("400: Invalid token");
    }
  },
};
