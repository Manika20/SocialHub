const mongoose = require("mongoose");
const env = require("./environment");
//console.log(env.db);

/*async function mongoConnect() {
  try {
    console.log(process.env.SOCIALHUB_MONGOO_URL);
    mongoose.connect(`mongodb://127.0.0.1:27017/${env.db}`);
    //mongoose.connect(process.env.SOCIALHUB_MONGOO_URL);
    const db = await mongoose.connection;
    await db.on(
      "error",
      console.error.bind(console, "MongoDB connection error")
    );
    await db.on("open", () => {
      //console.log("Connected to MongoDB");
    });
    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    console.log(error);
  }
}
  module.exports = mongoConnect;
*/
// Assuming this file has your environment configurations
require("dotenv").config(); // Load environment variables from .env file

async function mongoConnect() {
  try {
    // Use the MongoDB Atlas connection URL from environment variables
    const mongoURI =
      process.env.SOCIALHUB_MONGOO_URL || `mongodb://127.0.0.1:27017/${env.db}`;

    // Connect to MongoDB Atlas using Mongoose
    mongoose.connect(mongoURI);

    const db = mongoose.connection;

    // Listen for connection errors
    db.on("error", console.error.bind(console, "MongoDB connection error"));

    // When the connection is open, log success message
    db.once("open", () => {
      console.log("Connected to MongoDB Atlas");
    });

    return db;
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
}

module.exports = mongoConnect;
