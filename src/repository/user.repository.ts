import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { InsertResult, UpdateResult } from "typeorm";
import userPayload from "../interface/requests/userPayload";

// Definign the deta base to get Repository from user tables
function repo() {
  return AppDataSource.getRepository(User);
}

export const createUser = async function (payload: object): Promise<User> {
  return await repo().save({
    ...payload,
  });
};

export const getUser = async function (id: any): Promise<User> {
  return await repo().findOneByOrFail(id);
};

export const updateUser = async function (
  where: any,
  body: object
): Promise<UpdateResult> {
  return await repo().update(where, body);
};

export const checkRoom = async function (id: any): Promise<User> {
  return await repo()
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.rooms", "rooms")
    .where("user.id =:rooms", { rooms: id })
    .getOne();
};

export const getUsers = async function (
  body: userPayload
): Promise<[User[], number]> {
  return await repo().findAndCount({
    where: {
      usertype: body.userType,
    },
    order: {
      id: "ASC",
    },
    skip: body.Offset ? body.Offset : 0,
    take: body.limit ? body.limit : 10,
  });
};
