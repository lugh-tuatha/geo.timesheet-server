const express = require('express');
const router = express.Router();
const { getApptivoApi } = require('../controllers/apptivoApiControllers');

router.get("/work-orders", getApptivoApi)

module.exports = router;