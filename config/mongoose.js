const mongoose = require("mongoose");
const env = require("./environment");
console.log(env.db);
const connectDB = async () => {
  try {
    await mongoose.connect(env.db);
    console.log("connected to mongoo db!");
  } catch (err) {
    console.log("connect failed", err);
  }
};
module.exports = connectDB;
