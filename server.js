const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const colors = require("colors");
const dotenv = require("dotenv").config();

const Training = require('./model/trainingSchema')

const port = process.env.PORT;
const connectDB = require("./config/db");

const apptivoLinks = `https://api2.apptivo.com/app/dao/v6/workorders?a=getAllByAdvancedSearch&searchData=&apiKey=xnyRZVZUXTwz-YEShGzUNTxIjFH-56443bf5-6452-4259-ab1d-4d0af26fa371&accessKey=8cO9v570522y5o666iUsY2gn3uxoC783`;

connectDB();

app.post("/api/login", (req, res) => {
  console.log(req.body);
  res.redirect("http://localhost:4200/timesheet/");
});

app.use("/api/v1/trainings", require("./routes/trainingsRoutes"));

app.use("/geo/api/v1/timesheet", require('./routes/timesheetRoutes'))

app.get(apptivoLinks, (req, res) => {
  res.status(200).json({
    status: 'success',
    res
  })
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});