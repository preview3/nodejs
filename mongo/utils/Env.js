require("dotenv").config();

const ENV_VAR = {
  DB_URI: process.env.DB_URI,
  PORT: process.env.PORT,
};

module.exports = ENV_VAR;
