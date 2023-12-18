import { NextFunction, Request, Response } from "express";
const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware here.");
  next("router");
};

export default loggingMiddleware;
