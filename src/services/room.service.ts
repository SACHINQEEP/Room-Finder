import { UpdateResult } from "typeorm";
import addRoomPayload from "../interface/requests/roomPayload";
import { IRoom } from "../interface/responce/IRoom";
import {
  createRoom,
  getRoom,
  updateRoom,
  deleteRoom,
  checkRepo,
} from "../repository/room.repository";

export default class roomService {
  public async createRoom(body: addRoomPayload): Promise<IRoom> {
    let room = await createRoom(body);

    room = await getRoom({ id: room.id });

    return { room };
  }

  public async updateRoom(body: addRoomPayload): Promise<IRoom> {
    let room = await getRoom({
      id: body.id,
    });
    console.log(room);

    if (!room) throw new Error("Room Not Found");

    await updateRoom({ id: room.id }, { ...body });

    room = await getRoom({ id: room.id });

    return { room };
  }

  public async deleteRoom(body: any): Promise<IRoom> {
    let room = await getRoom({
      id: body.id,
    });

    if (!room) throw new Error("No room Found");

    await deleteRoom(room.id);

    return { room };
  }

  public async checkRoom(body: addRoomPayload): Promise<IRoom> {
    let room = await checkRepo(body);
    if (!room) throw new Error();
    return { room };
  }
}
