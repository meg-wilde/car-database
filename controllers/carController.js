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

// Update an existing car
exports.updateCar = async (req, res) => {
  try {
    console.log(`Received PUT request to update car with ID: ${req.params.id}`);
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );

    if (!updatedCar) {
      // Car with the given ID not found
      return res.status(404).json({ error: "Car not found" });
    }

    res.json({ message: "Car updated successfully", car: updatedCar });
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({ error: error.message });
  }
};

// Delete an existing car
exports.deleteCar = async (req, res) => {
  try {
    console.log(
      `Received DELETE request to delete car with ID: ${req.params.id}`
    );
    const deletedCar = await Car.findByIdAndDelete(req.params.id);

    if (!deletedCar) {
      // Car with the given ID not found
      return res.status(404).json({ error: "Car not found" });
    }

    res.json({ message: "Car deleted successfully", car: deletedCar });
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ error: error.message });
  }
};
