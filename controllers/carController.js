const Car = require("../models/carModel");

//add a new car
exports.addCar = async (req, res) => {
  try {
    console.log("Received POST request to add a car"); //add console message to know when the POST begins
    const newCar = new Car(req.body); //take the body of the request and store is as newCar
    const savedCar = await newCar.save();
    res.status(201).json({ message: "Car added successfully", car: newCar }); //send 201 status when car is saves
  } catch (error) {
    //handle errors
    console.error("Error adding car:", error);
    res.status(500).json({ error: error.message });
  }
};
