const express = require('express');

const app = express();

const router = express.Router();

router.use("/v1/trainings", require("./trainingsRoutes"));
router.use("/v1/timesheet", require('./timesheetRoutes'))
router.use("/apptivo/work-orders", require('./apptivoApiRoutes'))

module.exports = router;