// Load environment variables from the .env file into process.env
require("dotenv").config();

const express = require("express");

// Initialize the Express application
const app = express();

// Middleware to log request path and HTTP method
// This runs for every incoming request before reaching route handlers
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); // Pass control to the next middleware or route handler
});

/* Routes */

// Respond to GET requests at the root URL ("/")
// `req` contains information about the incoming request
// `res` is used to send a response back to the client
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" }); // Send a JSON response
});

// Start the server and listen for incoming requests on the specified port
// The port is defined in the .env file for flexibility (e.g., 4000 in development, different in production)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port", process.env.PORT);
});
