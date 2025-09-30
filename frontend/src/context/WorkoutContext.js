import { createContext, useReducer } from "react";

// 1. Create workouts context
export const WorkoutsContext = createContext();

// 2. Reducer function to manage workouts state updates
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      return state;
  }
};

// 3. Context provider that wraps the app and makes state available globally
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
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
