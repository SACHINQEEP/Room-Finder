import userController from "../controllers/user.controller";
import IBaseresponce from "../interface/responce/IBaseresponce";
import userService from "../services/user.service";
import * as express from "express";
import { checkJWT } from "../middleware/authontication";

const userRouter = express.Router();

const controller = new userController(new userService());

const ires = new IBaseresponce();

userRouter.post("/signup", async (req, res) => {
  try {
    const responce = await controller.signup(req.body);

    ires.success = "success";
    ires.statuscode = 200;
    ires.message = "Successfull registered";
    ires.data = responce;

    return res.send(ires);
  } catch (err) {
    ires.message = "email id already already in use";
    ires.error = err.message;
    ires.statuscode;
    return res.send(ires);
  }
});

userRouter.post("/signin", async (req, res) => {
  try {
    const responce = await controller.signin(req.body);

    ires.success = "Success";
    ires.statuscode = 200;
    ires.message = "Login Successfull";
    ires.data = responce;

    return res.send(ires);
  } catch (err) {
    ires.error = err.message;
    ires.statuscode;
    ires.message = "Please check your username, emailid or password";

    return res.send(ires);
  }
});

userRouter.get("/validate", checkJWT, async (req, res) => {
  try {
    ires.success = "Success";
    ires.statuscode = 200;
    ires.message = "Authorized";

    return res.send(ires);
  } catch (err) {
    ires.success;
    ires.statuscode;
    ires.message = "Unauthorized";

    return res.send(ires);
  }
});

export default userRouter;
