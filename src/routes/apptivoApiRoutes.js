const express = require('express');
const router = express.Router();
const { getApptivoApi } = require('../controllers/apptivoApiControlers');

router.get("/work-orders", getApptivoApi)

module.exports = router;