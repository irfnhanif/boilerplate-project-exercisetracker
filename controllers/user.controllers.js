const User = require("../models/user");

exports.getUser = async (req, res) => {
  const users = await User.find({});

  res.status(200).json(users);
};

exports.postUser = (req, res) => {
  const { username } = req.body;

  const user = new User({
    username: username,
  });

  user.save().catch((err) => console.error(err));

  res.status(200).json({ username: user.username, _id: user._id });
};