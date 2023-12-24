import { Request, Response, NextFunction } from "express";
import { QueryFailedError } from "typeorm";
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof QueryFailedError) {
    res.status(500).send({
      status: "error",
      message: "Query Error in DB",
    });
  } else
    res.status(500).send({
      status: "error",
      message: err.message,
    });
};

export default errorHandler;
