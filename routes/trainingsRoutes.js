const express = require("express");
const router = express.Router();
const {
  getTrainings,
  postTrainings,
  deleteTrainings,
} = require("../controllers/trainingsController");

router.get("/", getTrainings);

router.post("/", postTrainings);

router.delete("/:id", deleteTrainings);

module.exports = router;