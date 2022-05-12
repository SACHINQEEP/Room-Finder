import { Expose } from "class-transformer";
import { IsDefined, IsNumber, IsOptional, IsString } from "class-validator";
import { userType } from "../../enum/userType";

export default class userPayload {
  @Expose() @IsDefined() @IsNumber() userType: userType;

  @Expose() @IsOptional() @IsNumber() limit: number;

  @Expose() @IsOptional() @IsNumber() Offset: number;
}
