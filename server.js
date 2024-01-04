const express = require("express");
const mongoose = require("mongoose");
const carRoutes = require("./routes/carRoutes");
const app = express();
const port = 5000;

// MongoDB connection URI
const uri =
  "mongodb+srv://megcwilde:CarsPass456@cars.zx4quys.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Enable JSON request body parsing
app.use(express.json());

// Import the Car model
const Car = require("./models/carModel");

// API endpoint to retrieve cars
app.get("/api/cars", async (req, res) => {
  try {
    // Retrieve cars from the collection and send as JSON response
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    // Handle errors
    console.error("Error fetching cars:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Mount carRoutes for additional API routes under the "/api" prefix
app.use("/api", carRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
