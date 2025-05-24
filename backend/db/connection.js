// db/connection.js
const mongoose = require('mongoose');

// Ensure MONGO_URI is loaded from .env
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};

module.exports = connectDB;
