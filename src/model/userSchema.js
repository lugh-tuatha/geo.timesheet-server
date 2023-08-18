const { default: mongoose } = require("mongoose")

const user = new mongoose.Schema({
  name: String,
  email: String,
  employeeCode: String,
  department: String,
  dateHired: String,
  isActive: Boolean,
})

const User = mongoose.model('User', user)

module.exports = User;