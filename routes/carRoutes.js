const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

//POST to add a new car
router.post("/cars", carController.addCar);

//PUT to update an existing car
router.put("/cars/:id", carController.updateCar);

// DELETE to delete an existing car
router.delete("/cars/:id", carController.deleteCar);

module.exports = router;
