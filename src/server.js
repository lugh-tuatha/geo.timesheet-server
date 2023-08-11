const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const colors = require("colors");
const dotenv = require("dotenv").config();

const axios = require('axios');

const cors = require('cors');
app.use(cors())

const port = process.env.PORT;
const connectDB = require("./ConnectDB");

connectDB();

app.post("/api/login", (req, res) => {
  console.log(req.body);
  res.redirect("http://localhost:4200/timesheet/");
});

app.use("/geo/api/v1/trainings", require("./routes/trainingsRoutes"));

app.use("/geo/api/v1/timesheet", require('./routes/timesheetRoutes'))

app.get("/geo/api/apptivo/work-orders", async (req, res) => {
  const apptivoLinks = `https://api2.apptivo.com/app/dao/v6/workorders?a=getAllByAdvancedSearch&searchData=&apiKey=${process.env.APPTIVO_API_KEY}&accessKey=${process.env.APPTIVO_ACCESS_KEY}`;

  try {
    const response = await axios.get(apptivoLinks);

    res.status(200).json({
      status: 'success',
      response: response.data
    })
  }catch (err){
    res.status(404).json({
      status: 'fail',
      message: err.message,
    })
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});