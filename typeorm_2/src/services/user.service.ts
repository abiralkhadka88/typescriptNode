import { InsertResult } from "typeorm";
import { User, UserStatus } from "../entities/user.entity";

class UserService {
  async insert(): Promise<InsertResult> {
    const data = await User.insert({
      firstName: "Issac",
      lastName: "Newton",
      isActive: false,
      userStatus: UserStatus.REJECTED,
    });

    return data;
  }

  async find(): Promise<User[]> {
    const data = await User.find();
    return data;
  }

  async findOne(id: string) {
    const u = await User.find({
      where: {
        id,
      },
    });

    if (!u) throw new Error("user not found");
    return u;
  }
}
export default new UserService();
