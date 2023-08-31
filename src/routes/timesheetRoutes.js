const express = require('express');
const router = express.Router();
const { getTimesheet, postTimesheet, updateTimesheet, deleteTimesheet, getTimesheetById } = require('../controllers/timesheetController');

router.get("/", getTimesheet)

router.post("/", postTimesheet);

router.patch("/:id", updateTimesheet);

router.delete("/:id", deleteTimesheet);

router.get("/:id", getTimesheetById);


module.exports = router;