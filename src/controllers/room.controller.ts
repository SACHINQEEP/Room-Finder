import { Body, Patch, Post, Route, Tags } from "tsoa";
import addRoomPayload from "../interface/requests/roomPayload";
import { IRoom } from "../interface/responce/IRoom";
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

  @Patch("/updateroom/:id")
  public async updateRoom(@Body() body: addRoomPayload): Promise<IRoom> {
    return this.roomService.updateRoom(body);
  }
}