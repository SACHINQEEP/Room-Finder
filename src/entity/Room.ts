import { amenitiestype } from "../enum/amenitiesType";
import { flatetype } from "../enum/flateType";
import { moveintype } from "../enum/moveInType";
import { prefferencetype } from "../enum/prefferencetype";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  discription: string;

  @Column()
  price: number;

  @Column()
  deposit: number;

  @Column({
    type: "enum",
    enum: amenitiestype,
    default: amenitiestype.Nonfurnished,
  })
  amenitites: string;

  @Column({
    type: "enum",
    enum: flatetype,
    default: flatetype.SingleRoom,
  })
  flate: string;

  @Column({
    type: "enum",
    enum: moveintype,
    default: moveintype.Available,
  })
  movein: string;

  @Column()
  location: string;

  @Column({
    type: "enum",
    enum: prefferencetype,
    default: prefferencetype.Any,
  })
  prefferencetype: string;

  @Column("blob", {
    nullable: true,
    name: "graphic",
  })
  graphic: Buffer;

  @ManyToOne(() => User, (user) => user.rooms)
  user: User;
}
