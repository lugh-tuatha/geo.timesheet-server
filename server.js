const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


app.listen(9002, function check(error){
  if(error){
    console.log("Errorrr...!!")
  }else{
    console.log("Started....!!!!")
  }
});

mongoose.connect("mongodb://localhost:27017/abc", {useNewUrlParser: true, useUnifiedTopology: true},
function checkDb(error) {
  if(error){
    console.log("Error Connecting to DB");
  }else{
    console.log("Successfully Connected to DB");
  }
})