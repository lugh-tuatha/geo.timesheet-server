const express = require('express');
const router = express.Router();
const { getTotalHours, postTotalHours } = require('../controllers/totalHoursControllers');

router.get("/", getTotalHours)
router.post("/", postTotalHours)

module.exports = router;