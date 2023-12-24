import UserService from "../services/user.service";
import { Request, Response } from "express";

class UserController {
  // insert.
  async registerUser(req: Request, res: Response) {
    const data = await UserService.insert();
    res.send(data);
  }

  //get
  async findAllUsers(req: Request, res: Response) {
    const data = await UserService.find();
    res.send(data);
  }

  async getOneUser(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = await UserService.findOne(id);
      res.send(data);
    } catch (e: any) {
      res.send({
        status: "error",
        message: e.message,
      });
    }
  }
}

export default new UserController();
