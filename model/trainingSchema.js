const { default: mongoose } = require("mongoose")

const trainingSchema = new mongoose.Schema({
  type: String,
  cover: String,
  date: String,
  duration: Number,
  employeeCode: String,
  brands: String,
  distriPartner: String,
  details: String,
})

const Training = mongoose.model('Training', trainingSchema)

module.exports = Training;