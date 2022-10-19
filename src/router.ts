import { Router } from "express";
const router: Router = Router();

import dbRouter from "./routes/db";
import userRouter from "./routes/user";

router.use("/db", dbRouter);
router.use("/user", userRouter);

export default router;
