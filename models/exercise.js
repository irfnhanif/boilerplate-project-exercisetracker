const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
  _person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    required: true,
    type: String,
  },
  duration: {
    required: true,
    type: Number,
  },
  date: {
    type: String,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;