import { Expose } from "class-transformer";
import { IsString, IsDefined } from "class-validator";

/**
 * "id":1
 *  "name":"Devine Room",
 * "discription": "some details about the room",
 * "price":10000,
 * "deposit":30000,
 * "amenitites": "Nonfurnished",
 * "flate":"Room",
 * "movein":"Booked",
 * "location":"Indore MP",
 * "prefferencetype":"Any",
 * "graphic":"pic.jpg",
 * "userId":"1"
 */

export default class addRoomPayload {
  @Expose() @IsDefined() id: number;
  @Expose() @IsDefined() @IsString() name: string;

  @Expose() @IsDefined() @IsString() discription: string;

  @Expose() @IsDefined() price: number;

  @Expose() @IsDefined() deposit: number;

  @Expose() @IsDefined() @IsString() amenitites: string;

  @Expose() @IsDefined() @IsString() flate: string;

  @Expose() @IsDefined() @IsString() movein: string;

  @Expose() @IsDefined() @IsString() location: string;

  @Expose() @IsDefined() @IsString() prefferencetype: string;

  @Expose() @IsDefined() @IsString() graphic: string;

  @Expose() @IsDefined() users: number;
}
