import express, { NextFunction, Request, Response } from "express";
import authRouter from "./routes/auth.routes";
import loggingMiddleware from "./middlewares/logging.middleware";
import errorHandler from "./middlewares/errorhandler.middleware";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import compression from "compression";

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  limit: 4000, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Use an external store for consistency across multiple server instances.
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);
app.use(helmet());
app.use(compression());

app.use(express.static("public"));
app.use(express.json());
app.use("/auth", authRouter);

// App level middleware.
// app.use(loggingMiddleware);

app.get("/user/", (req: Request, res: Response) => {
  res.send("hello".repeat(1000));
  // res.json({

  //   id: 123,
  //   name: "nirmal",
  // });

  // res.on("finish", () => {
  //   console.log("... work");
  // });
});

app.use(errorHandler);

app.listen(4000, () => {
  console.log("Connection has been established");
});
