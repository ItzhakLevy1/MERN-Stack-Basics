const express = require("express"); // Import the Express framework
const Workout = require("../models/workoutModel"); // Import the Workout model for DB operations

const router = express.Router(); // Create a new router instance

// All routes here will be automatically prefixed with "/api/workouts"
// because of how they are mounted in server.js

// GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

// GET a single workout by ID
// The ":id" parameter captures the workout ID from the URL
router.get("/:id", (req, res) => {
  res.json({ message: `GET a single workout with id ${req.params.id}` });
});

// POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body; // Extract fields from request body

  try {
    // Create and save a new workout document in MongoDB
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    // Return validation or DB errors
    res.status(400).json({ error: error.message });
  }
});

// DELETE a workout by ID
router.delete("/:id", (req, res) => {
  res.json({ message: `DELETE a workout with id ${req.params.id}` });
});

// UPDATE a workout by ID (partial update)
router.patch("/:id", (req, res) => {
  res.json({
    message: `UPDATE a workout with id ${req.params.id}`,
    data: req.body, // Echo back the request body
  });
});

module.exports = router; // Export the router for use in server.js
