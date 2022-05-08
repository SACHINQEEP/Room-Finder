import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";
import { userType } from "../enum/userType";
import * as bcryptjs from "bcryptjs";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  username: string;

  @Column({
    type: "enum",
    enum: userType,
    default: userType.User,
  })
  usertype: string;

  @Column()
  age: number;

  @Column()
  number: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password?: string;

  @Column()
  address: string;

  @Column({
    type: "datetime",
    default: () => "NOW()",
  })
  @Index()
  lastlogin: string;

  hashPassword() {
    this.password = bcryptjs.hashSync(this.password || "", 10);
  }

  checkIfUnencryptedPasswordIsValid(UnencryptedPassword: string) {
    return this.password == UnencryptedPassword;
  }
}
