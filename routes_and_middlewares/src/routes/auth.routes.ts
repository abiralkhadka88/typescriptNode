import express, { Request, Response } from "express";
import loggingMiddleware from "../middlewares/logging.middleware";

const router = express.Router();

// Route level middleware.
router.use((req, res, next) => {
  console.log("inside auth route");
  next();
});

router.get(
  "/",
  [loggingMiddleware, loggingMiddleware, loggingMiddleware],
  (req: Request, res: Response) => {
    console.log("inside auth get");
    res.send("Auth GET Route");
  }
);

router.post("/login", (req: Request, res: Response) => {
  console.log(req.body);
  res.status(201).send("Logged in successfully");
});

export default router;
