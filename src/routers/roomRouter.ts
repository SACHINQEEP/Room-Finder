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
    ires.statuscode = 201;
    ires.message = "Room Created";
    ires.data = response;

    res.send(ires);
  } catch (err) {
    ires.success = "Fail";
    ires.statuscode = 400;
    ires.message = "Room Not created due to some error";
    ires.error = err.message;

    res.send(ires);
  }
});

roomRouter.patch("/update-room", async (req, res) => {
  try {
    const responce = await controller.updateRoom(req.body);
    console.log(responce);
    ires.success = "Success";
    ires.statuscode = 201;
    ires.message = "Room Updated";
    ires.data = responce;

    res.send(ires);
  } catch (err) {
    ires.success = "Fail";
    ires.statuscode = 400;
    ires.message = "Room not updated yet";
    ires.error = err.message;

    res.send(ires);
  }
});

roomRouter.delete("/delete-room", async (req, res) => {
  try {
    const responce = await controller.deleteRoom(req.body);

    ires.success = "Success";
    ires.statuscode = 200;
    ires.message = "Room Deleted";
    ires.data = responce;

    res.send(ires);
  } catch (err) {
    ires.success = "Fail";
    ires.statuscode = 400;
    ires.message = "Room not Found";
    ires.error = err.message;

    res.send(ires);
  }
});

roomRouter.post("/owner-room", async (req, res) => {
  try {
    const responce = await controller.checkRoom(req.body);
    console.log(responce);
    ires.success = "Success";
    ires.statuscode = 200;
    ires.message = "Rooms added By Owner";
    ires.error = "";
    ires.data = responce;
  } catch (err) {
    ires.success = "Fail";
    ires.statuscode = 400;
    ires.message = "Invalid User Id";
    ires.error = err.message;
  }
  res.send(ires);
});

export default roomRouter;
