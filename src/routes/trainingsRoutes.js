const express = require("express");
const router = express.Router();
const {
  getTrainings,
  postTraining,
  deleteTraining,
  updateTraining,
} = require("../controllers/trainingsController");

router.get("/", getTrainings);

router.post("/", postTraining);

router.patch("/:id", updateTraining)

router.delete("/:id", deleteTraining);

module.exports = router;