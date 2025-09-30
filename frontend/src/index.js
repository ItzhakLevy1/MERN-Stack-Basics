import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutsContextProvider } from "./context/WorkoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap the whole app in the provider to share state globally */}
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </React.StrictMode>
);

// index.js
// Entry point of the React application.
// - Renders the App component inside the root DOM element
// - Wraps App with WorkoutsContextProvider so that workouts state
//   is available throughout the entire app
// - Uses React.StrictMode for highlighting potential issues
