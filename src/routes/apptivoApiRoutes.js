const express = require('express');
const router = express.Router();
const { getApptivoApi } = require('../controllers/apptiviApiControlers');

router.get("/", getApptivoApi)

module.exports = router;
