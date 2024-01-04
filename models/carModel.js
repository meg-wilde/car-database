const mongoose = require("mongoose");

//create schema for cars
const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: Number,
    required: true,
  },
  reg_number: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model("Car", carSchema);

//export the module as Car
module.exports = Car;
