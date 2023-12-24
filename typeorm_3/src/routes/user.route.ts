import express from "express";
import userController from "../controller/user.controller";
import errorHandler from "../middlewares/errorhandler.middleware";

const userRouter = express.Router();

userRouter.post("/", userController.registerUser);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.get("/testuser", userController.testUser);
userRouter.get("/", userController.findAllUsers);
userRouter.get("/:id", userController.getOneUser);

export default userRouter;
