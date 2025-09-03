// Load environment variables from the .env file into process.env
require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts"); // Import the workouts routes

// Initialize the Express application
const app = express();

/* Middleware - runs for every incoming request before reaching route handlers */

app.use(express.json()); // Parse incoming requests with JSON payloads

// Custom middleware to log request details (path and method)
// This runs for every incoming request before reaching route handlers
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); // Pass control to the next middleware or route handler
});

/* Routes */

// All routes in workoutRoutes will be prefixed with "/api/workouts"
app.use("/api/workouts", workoutRoutes);

// Start the server and listen for incoming requests on the specified port
// The port is defined in the .env file for flexibility (e.g., 4000 in development, different in production)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port", process.env.PORT);
});
