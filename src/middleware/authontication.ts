import { getUser } from "../repository/user.repository";
import * as jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import config from "../config/server";

export const checkJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);

  let jwtPayload: any;

  try {
    jwtPayload = <any>jwt.verify(token, config.secretToken);

    res.locals.jwtPayload = jwtPayload;

    const user = await getUser({ id: parseInt(jwtPayload.userId + " ") });

    res.locals.user = user;
  } catch (err) {
    res.status(401).send({
      error: err.message,
    });
    return;
  }

  // const timeSinchEpoch: any = new Date().getTime;
  // const expirationTime: number =
  //   timeSinchEpoch + Number(config.expireTime) * 100000;
  // const expirationTimeInSec = Math.floor(expirationTime / 1000);

  const { id, username } = jwtPayload;
  const newToken = jwt.sign({ id, username }, config.secretToken, {
    expiresIn: "1h",
  });

  res.setHeader("token", newToken);

  next();
};
