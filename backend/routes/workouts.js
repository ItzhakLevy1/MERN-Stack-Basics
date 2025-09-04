const express = require("express"); // Import the Express framework
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router(); // Create a new router instance

// All routes here will be automatically prefixed with "/api/workouts"
// because of how they are mounted in server.js

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout by ID
// The ":id" parameter captures the workout ID from the URL
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout by ID
router.delete("/:id", deleteWorkout);

// UPDATE a workout by ID (partial update)
router.patch("/:id", updateWorkout);

module.exports = router; // Export the router for use in server.js
