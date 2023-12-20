import { DataSource } from "typeorm";
import { EnvConfiguration } from "./env.config";

const AppDataSource = new DataSource({
  type: EnvConfiguration.DB_TYPE as "postgres",
  host: EnvConfiguration.DB_HOST,
  port: +EnvConfiguration.DB_PORT,
  username: EnvConfiguration.DB_USERNAME,
  password: EnvConfiguration.DB_PASSWORD,
  database: EnvConfiguration.DB_NAME,
  entities: [`${__dirname}/../entities/user.entity.ts`],
  synchronize: true,
  // path.join() , for windows
});

export { AppDataSource };
