import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "bigbang@1330",
  database: "room_finder",
  synchronize: true,
  logging: ["error", "warn"],
  entities: ["src/entity/**/*.ts"],
  migrations: [],
  subscribers: [],
});
