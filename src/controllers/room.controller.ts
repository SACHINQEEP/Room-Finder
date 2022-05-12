import { Body, Delete, Get, Patch, Post, Query, Route, Tags } from "tsoa";
import addRoomPayload from "../interface/requests/roomPayload";
import { IRoom } from "../interface/responce/IRoom";
import { checkJWT } from "../middleware/authontication";
import roomService from "../services/room.service";

@Route("rooms")
@Tags("Room")
export default class roomController {
  private roomService: roomService;
  constructor(roomservice: roomService) {
    this.roomService = roomservice;
  }

  @Post("/")
  public async addRoom(@Body() body: addRoomPayload): Promise<IRoom> {
    return this.roomService.createRoom(body);
  }

  @Patch("/update-room/")
  public async updateRoom(@Body() body: addRoomPayload): Promise<IRoom> {
    return this.roomService.updateRoom(body);
  }

  @Post("/owner-room")
  public async checkRoom(@Body() body: addRoomPayload): Promise<IRoom> {
    return this.roomService.checkRoom(body);
  }

  @Delete("/delete-room")
  public async deleteRoom(@Body() body: object): Promise<IRoom> {
    return this.roomService.deleteRoom(body);
  }
}
