require("dotenv").config();
const mongoose = require("mongoose");

exports.db = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then("Database Connected!");
