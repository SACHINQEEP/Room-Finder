import * as express from "express";
import roomController from "../controllers/room.controller";
import IBaseresponce from "../interface/responce/IBaseresponce";
import roomService from "../services/room.service";

const roomRouter = express.Router();

const controller = new roomController(new roomService());
const ires = new IBaseresponce();

roomRouter.post("/", async (req, res) => {
  try {
    const response = await controller.addRoom(req.body);

    ires.success = "Success";
    ires.statuscode = 200;
    ires.message = "Room Created";
    ires.data = response;

    res.send(ires);
  } catch (err) {
    ires.success;
    ires.statuscode;
    ires.message = "Room Not created due to some error";
    ires.error = err.message;

    res.send(ires);
  }
});

roomRouter.patch("/updateroom", async (req, res) => {
  try {
    const responce = await controller.updateRoom(req.body);
    console.log(responce);
    ires.success = "Success";
    ires.statuscode = 200;
    ires.message = "Room Updated";
    ires.data = responce;

    res.send(ires);
  } catch (err) {
    ires.success;
    ires.statuscode;
    ires.message = "Room not updated yet";
    ires.error = err.message;

    res.send(ires);
  }
});

export default roomRouter;
