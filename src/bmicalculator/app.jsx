// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputHal from "./inputHal";
import OutputHal from "./outputHal";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<InputHal />} />
          <Route path="/output" element={<OutputHal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
