/** @format */

const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  adress: {
    type: String,
  },
  salary: {
    type: Number,
  },
  photo:{
    type: String,
    
  }
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
