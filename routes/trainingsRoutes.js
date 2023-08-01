const express = require("express");
const router = express.Router();
const {
  getTrainings,
  postTrainings,
  deleteTrainings,
  updateTrainings,
} = require("../controllers/trainingsController");

router.get("/", getTrainings);

router.post("/", postTrainings);

router.patch("/:id", updateTrainings)

router.delete("/:id", deleteTrainings);

module.exports = router;