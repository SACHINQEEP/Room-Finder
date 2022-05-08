import { Room } from "../entity/Room";
import { AppDataSource } from "../data-source";
import { UpdateResult } from "typeorm";

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
