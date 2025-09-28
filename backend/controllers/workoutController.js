// Importing dummy functions
const MockDB = require("./mockData.js");

// 1. GET all workouts
const getWorkouts = (req, res) => {
  // Instead of : const workouts = await Workout.find({}).sort({createdAt: -1});
  const workouts = MockDB.findAll();
  res.status(200).json(workouts);
};

// 5. GET A SINGLE WORKOUT
const getWorkout = (req, res) => {
  const { id } = req.params;
  const workout = MockDB.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }
  res.status(200).json(workout);
};

// 2. CREATE a new workout
const createWorkout = (req, res) => {
  // Instead of : const workout = await Workout.create({...req.body});
  try {
    const workout = MockDB.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 3. DELETE a workout
const deleteWorkout = (req, res) => {
  // Instead of : const workout = await Workout.findOneAndDelete({_id: id});
  const { id } = req.params;
  const deleted = MockDB.delete(id);

  if (!deleted) {
    return res.status(404).json({ error: "Workout not found" });
  }
  res.status(200).json({ message: "Deleted successfully" });
};

// 4. UPDATE a workout
const updateWorkout = (req, res) => {
  // Instead of : const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body});
  const { id } = req.params;
  const updatedWorkout = MockDB.update(id, req.body);

  if (!updatedWorkout) {
    return res.status(404).json({ error: "Workout not found" });
  }
  res.status(200).json(updatedWorkout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
