import userService from "../services/user.service";
import UserService from "../services/user.service";
import { Request, Response } from "express";

class UserController {
  // insert.
  async registerUser(req: Request, res: Response) {
    const data = await UserService.insert(req.body);
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

  async updateUser(req: Request, res: Response) {
    const data = await userService.update(req.params.id, req.body);
    res.send(data);
  }

  async deleteUser(req: Request, res: Response) {
    const data = await userService.delete(req.params.id);
    res.send(data);
  }

  async testUser(req: Request, res: Response) {
    const data = await UserService.testUser();
    res.send(data);
  }
}

export default new UserController();
