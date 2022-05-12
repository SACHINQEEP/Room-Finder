import { Room } from "../entity/Room";
import { AppDataSource } from "../data-source";
import { DeleteResult, UpdateResult } from "typeorm";
import addRoomPayload from "../interface/requests/roomPayload";

function repo() {
  return AppDataSource.getRepository(Room);
}

export const createRoom = async function (body: object): Promise<Room> {
  return await repo().save({
    ...body,
  });
};

export const getRoom = async function (id: any): Promise<Room> {
  return await repo().findOneByOrFail(id);
};

export const updateRoom = async function (
  where: any,
  body: object
): Promise<UpdateResult> {
  return await repo().update(where, body);
};

export const deleteRoom = async (where: any): Promise<DeleteResult> => {
  return await repo().delete(where);
};

// To check the owners room with owner details
export const checkRepo = async function (where: any): Promise<Room> {
  return await repo()
    .createQueryBuilder("room")
    .leftJoinAndSelect("room.user", "user")
    .where("room.user =:user", { user: where })
    .getOne();
};
