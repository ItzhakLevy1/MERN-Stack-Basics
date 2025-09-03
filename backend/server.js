// Load environment variables from the .env file into process.env
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts"); // Import workout-related routes

// Initialize the Express application
const app = express();

/* ----------------- Middleware ----------------- */

// Built-in middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Custom middleware to log request details (path + method)
// Runs for every incoming request before reaching any route handler
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); // Pass control to the next middleware/route handler
});

/* ----------------- Routes ----------------- */

// Prefix all workout routes with "/api/workouts"
app.use("/api/workouts", workoutRoutes);

/* ----------------- Database Connection ----------------- */

// Connect to MongoDB using mongoose
// process.env.MONGO_URI comes from the .env file
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // If connection succeeds, start the server
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    // Log any connection errors
    console.error("Failed to connect to DB:", error);
  });
