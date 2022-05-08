import userRouter from "./userRouter";
import * as express from "express";
import roomRouter from "./roomRouter";

const router = express.Router();

router.use("/users", userRouter);
router.use("/rooms", roomRouter);

export default router;
