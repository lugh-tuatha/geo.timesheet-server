const express = require('express');
const router = express.Router();
const { getTrainings } = require('../controllers/trainingsController')

router.get('/', getTrainings)

module.exports = router;