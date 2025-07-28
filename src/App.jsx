import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./sections/Projects";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Aboutme from "./sections/Aboutme";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </Router>
  );
};

export default App;
