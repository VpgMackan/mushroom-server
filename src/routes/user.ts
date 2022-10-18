import { Router, Response, Request } from "express";
import { Read } from "../middlewares/jwt";

const router: Router = Router();

router.get("/", Read, (req: Request, res: Response) => {
  // @ts-ignore
  res.send(req.locals.user);
});

export default router;
