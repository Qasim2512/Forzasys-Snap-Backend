/** @format */

const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

const Photo = mongoose.model("Photo", photoSchema);
module.exports = Photo;
