import express from "express";
import userController from "../controllers/user.controller";

const router = express.Router();

router.get("/register", userController.registerUser);

export { router };
