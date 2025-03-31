/** @format */
//Setup mongoDB connection

const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/forzaSnapDB";

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to mongoDb server");
});

db.on("error", (err) => {
  console.log(" mogoDb server error");
});

db.on("disconnected", () => {
  console.log("disconnected to mogoDb server");
});

module.exports = db;
