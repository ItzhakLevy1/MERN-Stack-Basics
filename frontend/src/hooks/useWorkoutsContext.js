import { WorkoutsContext } from "../context/WorkoutContext";    // import WorkoutsContext
import { useContext } from "react";    // import useContext

// Custom hook to easily access workouts context
export const useWorkoutsContext = () => {
    // Get context value 
  const context = useContext(WorkoutsContext);

  // Ensure hook is used inside provider
  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside a WorkoutsContextProvider"
    );
  }

  return context;
};

// useWorkoutsContext.js
// Custom React hook that provides access to the workouts context.
// Ensures that components can easily access the global workouts state
// and dispatch actions to update it. Throws an error if used outside
// of the WorkoutsContextProvider.
