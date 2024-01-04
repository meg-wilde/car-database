const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

router.post("/cars", carController.addCar); //POST to add a new car

module.exports = router;
