import { InsertResult } from "typeorm";
import { User, UserStatus } from "../entities/user.entity";

class UserService {
  async insert(data: any): Promise<InsertResult> {
    const data = await User.insert({
      ...data,
      // isActive: false,
      // userStatus: UserStatus.REJECTED,
      // relativeNameList: ["a", "b"],
      // miscInfo: { isNepali: true, voterIDCard: "12-23" },
    });

    return data;
  }

  async find(): Promise<User[]> {
    const data = await User.find();
    return data;
  }

  async findOne(id: string) {
    const u = await User.findOne({
      where: {
        id,
      },
    });

    if (!u) throw new Error("user not found");
    return u;
  }

  async update(id: string, data: any) {
    const u = await User.findOne({
      where: {
        id,
      },
    });

    if (!u) throw new Error("User not found");

    u.firstName = data.firstName;
    u.lastName = data.lastName;
    return await u.save();
  }

  async delete(id: string) {
    const u = await User.findOne({
      where: {
        id,
      },
    });

    if (!u) throw new Error("User not found");

    return await u.softRemove();
  }

  // userTest

  async testUser() {
    // User.findAndCount() // without params
    // const [data, count] = await User.findAndCount({
    //   where: {
    //     firstName: "Neil",
    //     lastName: "Bohr",
    //   },
    // });
    // return data;
    // const data = await User.query("SELECT * FROM user_table");
    // return data;
    // QueryBuilder
    // const user = await User.createQueryBuilder("u")
    //   .where("u.firstName=:fn", { fn: "Neil" })
    //   .andWhere("u.lastName=:ln", { ln: "Bohr" })
    //   .orderBy("u.firstName", "ASC")
    //   .getSql();
    // return user;
    // return user;
    // const data = User.createQueryBuilder("u")
    //   .select("AVG(u.bankBalance)", "average_user_bank_balance")
    //   .getRawOne();
    // return data;
    // SUM
    // const data = User.createQueryBuilder("u")
    //   .select("SUM(u.bankBalance)", "sum_of_user_bank_balance")
    //   .getRawOne();
    // return data;
    // MIN,MAX
    // const data = User.createQueryBuilder("u")
    //   .select("MAX(u.bankBalance)", "max_of_user_bank_balance")
    //   .getRawOne();
    // return data;
    // SELECT AVG(user.bank_balance) FROM USER;

    // json query.

    const user = await User.createQueryBuilder("u")
      .where("u.data->>'voterIDCard'=:value", {
        value: "12",
      })
      .getMany();

    return user;
  }
}
export default new UserService();
