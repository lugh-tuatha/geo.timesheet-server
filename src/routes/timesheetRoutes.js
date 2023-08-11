const express = require('express');
const router = express.Router();
const { getTimesheet, postTimesheet, updateTimesheet, deleteTimesheet } = require('../controllers/timesheetController');

router.get("/", getTimesheet)

router.post("/", postTimesheet);

router.patch("/:id", updateTimesheet);

router.delete("/:id", deleteTimesheet);

module.exports = router;