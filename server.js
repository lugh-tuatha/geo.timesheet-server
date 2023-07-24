const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const colors = require('colors')
const dotenv = require('dotenv').config();

const port = process.env.PORT;
const connectDB = require('./config/db')

connectDB()



// app.listen(9000, function check(error){
//   if(error){
//     console.log("Errorrr...!!")
//   }else{
//     console.log("Started....!!!!")
//   }
// });

// mongoose.connect("mongodb://localhost:27017/abc", {useNewUrlParser: true, useUnifiedTopology: true},
// function checkDb(error) {
//   if(error){
//     console.log("Error Connecting to DB");
//   }else{
//     console.log("Successfully Connected to DB");
//   }
// })

app.post('/api/login', (req, res) => {
  console.log(req.body);
  res.redirect('http://localhost:4200/timesheet/')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

app.use('/api/training', require('./routes/trainingRoutes'))