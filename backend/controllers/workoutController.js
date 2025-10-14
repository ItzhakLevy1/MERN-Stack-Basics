const Workout = require("../models/workoutModel"); // Import the Workout model for DB operations
const mongoose = require("mongoose");

// GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
  // Fetch all workout documents from DB and sort them from newest to oldest
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  // Send success response with all workouts as JSON
  res.status(200).json(workouts);
};

// GET A SINGLE WORKOUT
const getWorkout = async (req, res) => {
  const { id } = req.params; // Extract the id from the request URL

  // Validate that the provided id is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  // Find workout document by its id
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// CREATE A NEW WORKOUT
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body; // Destructure the request body

  // Server side fields validation
  let emptyFields = [];

  // Check if any of the fields is missing its value
  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }

  // If any of the fields is missing its value send an error message back to the client side
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    // Create and save a new workout document in DB
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    // Return validation or DB errors
    res.status(400).json({ error: error.message });
  }
};

// DELETE A WORKOUT
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  // Validate that the provided id is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  // Delete the workout document by its unique _id (default field in MongoDB)
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// UPDATE A WORKOUT
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  // Validate that the provided id is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  // Update the workout with the fields provided in the request body
  // Note: Without { new: true }, this returns the old document by default
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
