import { Expose } from "class-transformer";
import { IsDefined, IsString } from "class-validator";

/**
 * "email":"patelsachinsp269@gmail.com",
 * "usertype":"User"
 * "password": "sachin@1330",
 * "token": "AAAA9MUL8aI:APA91bG10taM95MS7jOdbOiPLg6rE7gBw04T5amtbQaS1KbVt2Mf5P5r801ovOOEaFVTF9U0zucknzA5Lw1VRyxtYKtkpRpMbo57Y_CQ1iMQmMJd1pFEgov0sdBgfV8UEBHZm2WY1uc8"
 */

export default class signinPayload {
  @Expose() @IsDefined() @IsString() email: string;

  @Expose() @IsDefined() @IsString() usertype: string;

  @Expose() @IsDefined() @IsString() password: string;
}
