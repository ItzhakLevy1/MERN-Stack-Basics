const mongoose = require("mongoose");

// Create a new schema instance
const Schema = mongoose.Schema;

// Define the structure of workout documents in MongoDB
const workoutSchema = new Schema(
  {
    // The title of the workout
    title: {
      type: String,
      required: true,
    },
    // The number of repetitions for the workout
    reps: {
      type: Number,
      required: true,
    },
    // The weight/load for the workout
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields on workout documents in MongoDB
);

// Export the model so that it can be imported and used in other parts of the application
module.exports = mongoose.model("Workout", workoutSchema);
