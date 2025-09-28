// Load environment variables from the .env file into process.env
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// Initialize the Express application
const app = express();

/* ----------------- Middleware ----------------- */

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

/* ----------------- Routes ----------------- */

app.use("/api/workouts", workoutRoutes);

/* ----------------- Database Connection & Server Start (Modified) ----------------- */

// 1. Connect to MongoDB using mongoose - but dont condition starting the server according to tah
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch((error) => {
    // If the connection fails, we will log an error, AND continue on.
    console.error("Failed to connect to DB. Proceeding with Mock Data:", error);
  });

// 2. Start the server immediately, regardless of the DB connection
app.listen(process.env.PORT, () => {
  // When the backend server is started, it uses the mocking files you created.
  console.log(
    "Server listening on port",
    process.env.PORT,
    "(Using Mock Data)."
  );
});
