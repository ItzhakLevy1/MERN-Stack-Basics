// The BrowserRouter wraps the entire application enabling routing, Routes and Route components are used to define the app's routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* Every thing that needs to use the routing system needs to be inside <BrowserRouter> */}
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
