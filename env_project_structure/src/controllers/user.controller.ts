import userService from "../services/user.service";
import { Request, Response } from "express";

class UserController {
  registerUser(req: Request, res: Response) {
    const response = userService.add();
    res.send(response);
  }
}

export default new UserController();
