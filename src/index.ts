import { AppDataSource } from "./data-source";
import * as express from "express";
import router from "./routers";
import * as cors from "cors";
import * as morgan from "morgan";
import * as swaggerUi from "swagger-ui-express";
import * as bodyparser from "body-parser";
import "reflect-metadata";

const app = express();

app.use(bodyparser.json());
app.use(express.json());

app.use(router);

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup({
    swaggerOptions: {
      url: "/swagger.yaml",
    },
  })
);

app.use(cors);

app.use(morgan("dev"));

app.use(express.static("public"));

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
  })
  .catch((error) => console.log(error));

const port = 8080;
app.listen(port, () => console.log(`Server listed on ${port}`));
