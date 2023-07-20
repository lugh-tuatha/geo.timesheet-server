const express = require('express');
const app = express();
const port = 9000;

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


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
