const express = require('express');
const router = express.Router();
const { getTotalHours, postTotalHours } = require('../controllers/totalHours');

router.get("/", getTotalHours)
router.post("/", postTotalHours)

module.exports = router;