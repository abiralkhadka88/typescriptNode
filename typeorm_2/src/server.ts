import "reflect-metadata";
import express, { Request, Response } from "express";
import { EnvConfiguration } from "./config/env.config";
import { AppDataSource } from "./config/database.config";
import { User, UserStatus } from "./entities/user.entity";
import userRouter from "./routes/user.route";
import errorHandler from "./middlewares/errorhandler.middleware";

const app = express();

app.use("/user", userRouter);

app.use(errorHandler);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(EnvConfiguration.PORT, () => {
      console.log("TCP server established");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
