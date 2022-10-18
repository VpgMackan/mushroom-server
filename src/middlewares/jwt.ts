import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

function Read(req: Request, res: Response, next: NextFunction) {
  const data: JwtPayload | String = jwt.verify(
    req.cookies.jwt,
    process.env.JWT_SECRET
  );
  
  // @ts-ignore
  req.locals.user = data;
  next();
}

export { Read };
