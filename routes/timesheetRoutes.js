const express = require('express');
const router = express.Router();
const { getTimesheet, postTimesheet } = require('../controllers/timesheetController');

router.get("/", getTimesheet)

router.post("/", postTimesheet);

module.exports = router;