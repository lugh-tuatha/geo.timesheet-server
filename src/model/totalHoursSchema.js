const { default: mongoose } = require("mongoose")

const totalHours = new mongoose.Schema({
  name: String,
  totalHours: Number,
  project: String,
})

const TotalHours = mongoose.model('TotalHours', totalHours)

module.exports = TotalHours;