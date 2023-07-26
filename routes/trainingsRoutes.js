const express = require('express');
const router = express.Router();
const { getTrainings, postTrainings } = require('../controllers/trainingsController')

router.get('/', getTrainings)

router.post('/', postTrainings)

module.exports = router;