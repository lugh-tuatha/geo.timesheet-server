const { default: mongoose } = require("mongoose")

const trainingSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, 'A training myst have a type']
  },
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