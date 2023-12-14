import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("API is working");
});

app.listen(4000, () => {
  console.log("server has started");
});
