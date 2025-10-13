import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  // Access the dispatch function from the global workouts context
  const { dispatch } = useWorkoutsContext();

  // Function to handle the workout deletion process
  const handleClick = async () => {
    // 1. Send an HTTP DELETE request to the backend API endpoint
    // This is the action that triggers the deletion in the database
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE", // Specify the HTTP method as DELETE
    });

    // Parse the JSON response from the server (often the deleted workout object)
    const json = await response.json();

    // 2. Check if the deletion request was successful (status code 200-299)
    if (response.ok) {
      // 3. If successful, dispatch an action to update the local state
      // The DELETE_WORKOUT action is handled by the reducer to remove the workout from the UI array
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg)</strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
