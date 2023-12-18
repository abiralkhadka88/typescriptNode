import dotenv from "dotenv";
dotenv.config();

export class EnvConfiguration {
  static PORT = +(process.env.PORT || 4000);

  static DB_NAME = process.env.DB_NAME;
  static DB_HOST = process.env.DB_HOST;
  static DB_TYPE = process.env.DB_TYPE;
  static DB_USERNAME = process.env.DB_USERNAME;
  static DB_PASSWORD = process.env.DB_PASSWORD;
}
