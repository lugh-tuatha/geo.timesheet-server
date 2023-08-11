const { default: mongoose } = require("mongoose")

const timesheetSchema = new mongoose.Schema({
  isChecked: Boolean,
  approvedBy: String,
  isOT: Boolean,
  isND: Boolean,
  date: {
    type: String,
    default: '08/09/23',
  },
  location: {
    type: String,
    default: 'OFC-DW',
  },
  project: {
    type: String,
    default: 'GEO',
  },
  task: String,
  actualHours: Number,
  projectDescription: String,
  weekNo: Number,
})

const Timesheet = mongoose.model('Timesheet', timesheetSchema);

module.exports = Timesheet;