// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputHal from "./inputHal";
import OutputHal from "./outputHal";

function Aplikasi() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputHal />} />
        <Route path="/output" element={<OutputHal />} />
      </Routes>
    </Router>
  );
}

export default Aplikasi;
