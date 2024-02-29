const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const uri = `mongodb+srv://${process.env.EMAIL}:${process.env.PASSWORD}@hackathon.i8cmqm5.mongodb.net/ecommerce`;
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
