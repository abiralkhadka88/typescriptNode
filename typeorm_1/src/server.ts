import "reflect-metadata";
import express from "express";
import { EnvConfiguration } from "./config/env.config";
import { AppDataSource } from "./config/database.config";

const app = express();

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
