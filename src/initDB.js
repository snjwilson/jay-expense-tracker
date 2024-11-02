const mongoose = require("mongoose");

const startDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/expensedb");
    console.log("successfully connected to expense DB");
  } catch (error) {
    console.error("Failed to connect to DB: ", error);
  }
};

module.exports = { startDB };
