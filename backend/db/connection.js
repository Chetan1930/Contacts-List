// db/connection.js
const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected bhai");
  } catch (err) {
    console.error("Dikkat ho gyi ye:", err);
  }
};

module.exports = connection;
