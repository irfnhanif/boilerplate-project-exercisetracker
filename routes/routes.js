const express = require("express");
const userController = require('../controllers/user.controllers')
const exerciseController = require('../controllers/exercise.controllers')

const router = express.Router();

router
  .route("/")
  .get(userController.getUser)
  .post(userController.postUser);

router.post("/:_id/exercises", exerciseController.postExercise);

router.get("/:_id/logs", exerciseController.getLogs);

module.exports = router;
