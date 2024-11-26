import dotenv from "dotenv";
dotenv.config();

export const ENV_VAR = {
  DB_URI: process.env.DB_URI,
  PORT: process.env.PORT,
};
