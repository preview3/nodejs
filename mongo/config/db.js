const mongoose = require("mongoose");
const ENV_VAR = require("../utils/Env.js");

(() => {
  const { DB_URI } = ENV_VAR;
  if (DB_URI) {
    mongoose
      .connect(DB_URI)
      .then(() => console.log("Server connected to database"))
      .catch((error) => console.log("Connection Error: ", error));
  } else {
    console.log("DB_URI is empty");
  }
})();
