const Exercise = require("../models/exercise");

exports.postExercise = async (req, res) => {
  const userID = req.params._id;
  const { _id, description, duration } = req.body;
  let date = req.body.date;

  if (!date) {
    date = new Date();
  }

  const user = await User.findById(userID);

  const exercise = new Exercise({
    _person: user._id,
    description: description,
    duration: Number(duration),
    date: new Date(date).toDateString(),
  });

  exercise.save().catch((err) => console.error(err));

  res.status(200).json({
    _id: user._id,
    username: user.username,
    description: description,
    duration: Number(duration),
    date: exercise.date,
  });
};

exports.getLogs = async (req, res) => {
  const { _id } = req.params;
  const { from, to, limit } = req.query;

  const user = await User.findById(_id);
  let exercises = await Exercise.find({ _person: _id });

  if (from) {
    const fromDate = new Date(from);
    exercises.filter((exercise) => new Date(exercise.date) > fromDate);
  }

  if (to) {
    const toDate = new Date(to);
    exercises.filter((exercise) => new Date(exercise.date) < toDate);
  }

  if (limit) {
    exercises = exercises.slice(0, limit);
  }

  res.status(200).json({
    username: user.username,
    count: exercises.length,
    _id: user._id,
    log: exercises,
  });
};