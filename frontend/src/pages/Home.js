import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  // Access global workouts state and dispatch function from context
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      /* Fetch all workouts from backend API ( getWorkouts ),
         We dont use "http://localhost:4000/api/workouts" since this is the only way the proxy parameter in package.json would work ("proxy": "http://localhost:4000")
         and prevent a cors issue, the other option is to install the CORS package
       */
      const response = await fetch("/api/workouts");
      const json = await response.json();

      // If response is valid, update global state with workouts
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;

// Home.js
// This component serves as the main dashboard page.
// It fetches all workouts from the backend API, stores them in global state
// using context, and renders a list of WorkoutDetails components.
// It also includes the WorkoutForm to allow users to add new workouts.
