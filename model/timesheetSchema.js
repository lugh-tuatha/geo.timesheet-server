const { default: mongoose } = require("mongoose")

const timesheetSchema = new mongoose.Schema({
  isChecked: Boolean,
  approvedBy: String,
  isOT: Boolean,
  isND: Boolean,
  date: {
    type: String,
    required: [true, 'must have date'],
  },
  project: {
    type: String,
    default: 'GEO',
  },
  task: {
    type: String,
    required: [true, 'must have task'],
  },
  actualHours: {
    type: Number,
    required: [true, 'must have actual hours'],
  },
  projectDescription: String,
  weekNo: Number,
})

const Timesheet = mongoose.model('Timesheet', timesheetSchema);

module.exports = Timesheet;