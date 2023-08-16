const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const colors = require("colors");
const dotenv = require("dotenv").config();

const cors = require('cors');
app.use(cors())

const port = process.env.PORT;
const connectDB = require("./ConnectDB");

connectDB();

app.post("/api/login", (req, res) => {
  console.log(req.body);
  res.redirect("http://localhost:4200/timesheet/");
});

app.use("/geo/api", require("./routes/router"))

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});