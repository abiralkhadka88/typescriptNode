import { EnvConfiguration } from "./config/env.config";
import express, { Request, Response } from "express";
import { router as userRouter } from "./routes/user.route";

const app = express();

app.use("/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  throw new Error("not found");
});

app.listen(EnvConfiguration.PORT, () => {
  console.log("server has started");
});
