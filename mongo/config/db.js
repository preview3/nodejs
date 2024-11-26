import mongoose from "mongoose";
import { ENV_VAR } from "../utils/Env.js";

const ConnectDB = async () => {
  try {
    const { DB_URI } = ENV_VAR;
    if (DB_URI) {
      await mongoose
        .connect(DB_URI)
        .then(() => console.log("servet connected to data base"))
        .catch((error) => console.log(error));
    } else {
      console.log("invalid data base uri");
    }
  } catch (error) {
    console.log(error);
  }
};

ConnectDB();
