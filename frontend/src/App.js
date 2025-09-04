// The BrowserRouter wraps the entire application enabling routing, Routes and Route components are used to define the app's routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Every thing that needs to use the routing system needs to be inside <BrowserRouter> */}
      <BrowserRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
