const mongoose = require("mongoose");
const env = require("./environment");
console.log(env.db);
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://goyalmanika20:L6ZKwDY4DaV9LxQU@socialhub.0ydpadf.mongodb.net/?retryWrites=true&w=majority&appName=socialhub"
    );
    console.log("connected to mongoo db!");
  } catch (err) {
    console.log("connect failed", err);
  }
};
module.exports = connectDB;
