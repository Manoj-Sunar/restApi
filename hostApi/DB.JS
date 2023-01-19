// Code for data base
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const db = process.env.DATABASE;
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(db)
  .then(() => console.log("connected successfully"))
  .catch((err) => {
    console.log(err);
  });
