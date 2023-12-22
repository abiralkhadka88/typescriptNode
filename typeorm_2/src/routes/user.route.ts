import express from "express";
import userController from "../controller/user.controller";
import errorHandler from "../middlewares/errorhandler.middleware";

const userRouter = express.Router();

userRouter.post("/", userController.registerUser);
userRouter.get("/", userController.findAllUsers);
userRouter.get("/:id", [errorHandler], userController.getOneUser);

export default userRouter;
