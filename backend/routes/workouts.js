const express = require("express"); // Import the Express framework

const router = express.Router(); // Create a new router instance

// All routes here will be automatically prefixed with "/api/workouts"
// because of how they are used in server.js

// GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

// GET a single workout by ID
// The ":id" parameter will match any workout ID passed in the URL
router.get("/:id", (req, res) => {
  res.json({ message: `GET a single workout with id ${req.params.id}` });
});

// POST a new workout
router.post("/", (req, res) => {
  // req.body will contain the data sent in the request
  res.json({ message: "POST a new workout", data: req.body });
});

// DELETE a workout by ID
router.delete("/:id", (req, res) => {
  res.json({ message: `DELETE a workout with id ${req.params.id}` });
});

// UPDATE a workout by ID (partial update)
router.patch("/:id", (req, res) => {
  res.json({ message: `UPDATE a workout with id ${req.params.id}`, data: req.body });
});

module.exports = router; // Export the router for use in server.js
