/** @format */

const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//import Router files
const photoRoutes = require("./routes/photoRoutes");

//use the routes
app.use("/photo", photoRoutes);

app.listen(3000, () => {
  console.log("listening to port 3000");
});
