import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import UserPage from "./components/UserPage/UserPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/:id' element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
