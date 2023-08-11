const DBConfig = require('./services/shared/config-service').getConf('DB')

const mongoose = require('mongoose');

const DB = process.env.MONGO_URI.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

const connectDB = async () => {
  try{
    const conn = await mongoose.connect(DB || DBConfig.DatabaseUrl);

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
  }catch (error){
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB;