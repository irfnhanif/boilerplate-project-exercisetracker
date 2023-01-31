const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { required: true, type: String },
  _exercise: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;