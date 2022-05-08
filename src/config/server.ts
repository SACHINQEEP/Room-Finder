import * as dotenv from "dotenv";

dotenv.config();
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3600;
const SERVER_TOKEN_SECRET =
  process.env.SERVER_TOKEN_SECRET ||
  "APA91bG10taM95MS7jOdbOiPLg6rE7gBw04T5amtbQaS1KbVt2Mf5P5r801ovOOEaFVTF9U0zucknzA5Lw1VRyxtYKtkpRpMbo57Y_CQ1iMQmMJd1pFEgov0sdBgfV8UEBHZm2WY1uc8";

const service = {
  secretToken: SERVER_TOKEN_SECRET,
  expireTime: SERVER_TOKEN_EXPIRETIME,
};

export default service;
