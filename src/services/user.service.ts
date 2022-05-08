import jwtWebToken from "../utils/utils";
import signupPayload from "../interface/requests/signupPayload";
import { IUser } from "../interface/responce/IUser";
import { createUser, getUser, updateUser } from "../repository/user.repository";
import signinPayload from "../interface/requests/signinPayload";

export default class userService {
  public async createUser(body: signupPayload): Promise<IUser> {
    let user = await createUser(body);
    console.log(user);

    await updateUser({ id: user.id }, { lastlogin: new Date() });

    user = await getUser({ id: user.id });

    const token = jwtWebToken(user.id);
    console.log(token);

    return { user, token };
  }

  public async getUser(body: signinPayload): Promise<IUser> {
    let user = await getUser({
      username: body.username,
      email: body.email,
      usertype: body.usertype,
      password: body.password,
    });
    if (!user) throw new Error("User not found");

    await updateUser({ id: user.id }, { lastlogin: new Date() });

    const token = jwtWebToken(user.id);

    return { user, token };
  }
}
