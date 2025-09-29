// // Our data set - simulating a MongoDB collection
// let workouts = [
//   {
//     _id: "mock1",
//     title: "Push Ups",
//     reps: 20,
//     load: 10,
//     createdAt: new Date(),
//   },
//   { _id: "mock2", title: "Squats", reps: 15, load: 50, createdAt: new Date() },
// ];

// // A function to generate a simple unique identifier (instead of MongoDB)
// const generateId = () => Math.random().toString(36).substring(2, 9);

// // Functions to simulate DB operations
// const MockDB = {
//   // Read All (GET /api/workouts)
//   findAll: () => workouts,

//   // Read One (GET /api/workouts/:id)
//   findById: (id) => workouts.find((w) => w._id === id),

//   // Create (POST /api/workouts)
//   create: (newWorkoutData) => {
//     const newWorkout = {
//       _id: generateId(), // Creating a new identifier
//       ...newWorkoutData,
//       createdAt: new Date(),
//     };
//     workouts.push(newWorkout);
//     return newWorkout;
//   },

//   // Delete (DELETE /api/workouts/:id)
//   delete: (id) => {
//     const initialLength = workouts.length;
//     workouts = workouts.filter((w) => w._id !== id);
//     return initialLength !== workouts.length; // Return true if deleted
//   },

//   // Update (PATCH /api/workouts/:id)
//   update: (id, updateData) => {
//     const index = workouts.findIndex((w) => w._id === id);
//     if (index > -1) {
//       workouts[index] = { ...workouts[index], ...updateData };
//       return workouts[index];
//     }
//     return null;
//   },
// };

// module.exports = MockDB;
