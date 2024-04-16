const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbUri = process.env.SOCIALHUB_DB; // Fetch URI from environment variables
    await mongoose.connect(dbUri);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log("Connection to MongoDB failed", err);
  }
};

module.exports = connectDB;
