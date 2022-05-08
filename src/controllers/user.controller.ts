import { Body, Get, Post, Route, Tags } from "tsoa";
import signinPayload from "../interface/requests/signinPayload";
import signupPayload from "../interface/requests/signupPayload";
import { IUser } from "../interface/responce/IUser";
import userService from "../services/user.service";

@Route("users")
@Tags("User")
export default class userController {
  private userService: userService;
  constructor(userservice: userService) {
    this.userService = userservice;
  }

  @Post("/signup")
  public async signup(@Body() body: signupPayload): Promise<IUser> {
    return this.userService.createUser(body);
  }

  @Post("/signin")
  public async signin(@Body() body: signinPayload): Promise<IUser> {
    return this.userService.getUser(body);
  }

  @Get("/checkroom")
  public async check(@Body() body: any): Promise<IUser> {
    return this.userService.checkRoom(body);
  }
}
