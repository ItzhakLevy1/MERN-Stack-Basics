import { createContext, useReducer } from "react";

// 1. Create workouts context
export const WorkoutsContext = createContext();

// 2. Reducer function to manage workouts state updates
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS": // Action to set all workouts
      return {
        workouts: action.payload, // Set the workouts state to the payload (array of workouts)
      };
    case "CREATE_WORKOUT": // Action to add a new workout
      return {
        workouts: [action.payload, ...state.workouts], // Add the new workout (action.payload) to the existing workouts array
      };
    default:
      return state;
  }
};

// 3. Context provider that wraps the app and makes state available globally
export const WorkoutsContextProvider = ({ children }) => {
  // Use useReducer to manage workouts state with the defined reducer and initial state of null workouts
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    // Provide state and dispatch function to children components
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

// WorkoutContext.js
// Defines the global state management for workouts using React Context + useReducer.
// - Provides the WorkoutsContext for sharing state across the app
// - Defines workoutsReducer to handle SET_WORKOUTS and CREATE_WORKOUT actions
// - Exports WorkoutsContextProvider to wrap the App and make state available
