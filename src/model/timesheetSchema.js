const { default: mongoose } = require("mongoose")

const timesheetSchema = new mongoose.Schema({
  projects: String,
  mon: String,
  tue: String,
  wed: String,
  thu: String,
  fri: String,
  sat: String,
  sun: String,
  total: String,
})

const Timesheet = mongoose.model('Timesheet', timesheetSchema);

module.exports = Timesheet;