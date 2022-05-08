import * as jwt from "jsonwebtoken";
import config  from "../config/server";

export default function jwtWebToken(id: number): string {
    const token = jwt.sign(
        {userId: id},
        config.secretToken,
        {expiresIn: config.expireTime}
    )

    return token
}