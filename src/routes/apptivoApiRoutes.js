const express = require('express');
const router = express.Router();
const { getApptivoApi } = require('../controllers/apptivoApiControlers');

router.get("/", getApptivoApi)

module.exports = router;