const express = require('express');

const app = express();

const router = express.Router();

router.use("/v1/trainings", require("./trainingsRoutes"));
router.use("/v1/timesheet", require('./timesheetRoutes'))
router.use("/apptivo", require('./apptivoApiRoutes'))
router.use("/v1/totalhours", require("./totalHoursRoutes"))
router.use("/v1/user", require("./userRoutes"))

module.exports = router;