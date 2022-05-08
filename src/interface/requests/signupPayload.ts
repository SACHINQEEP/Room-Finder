import { Expose } from "class-transformer";
import { IsDefined, IsString } from "class-validator";

/**
 * "firstname":"Sachin",
 * "lastname": "Patel",
 * "username": "sachinqeep",
 * "usertype": "Owner" ,
 * "password": sachin@1330,
 * "token": "AAAA9MUL8aI:APA91bG10taM95MS7jOdbOiPLg6rE7gBw04T5amtbQaS1KbVt2Mf5P5r801ovOOEaFVTF9U0zucknzA5Lw1VRyxtYKtkpRpMbo57Y_CQ1iMQmMJd1pFEgov0sdBgfV8UEBHZm2WY1uc8"
 */

export default class signupPayload {
  @Expose() @IsDefined() @IsString() firstname: string;

  @Expose() @IsDefined() @IsString() lastname: string;

  @Expose() @IsDefined() username: string;

  @Expose() @IsDefined() @IsString() usertype: string;

  @Expose() @IsDefined() @IsString() password: string;

  @Expose() @IsDefined() @IsString() token: string;
}
