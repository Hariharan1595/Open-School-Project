import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";

import Admission from "./pages/Admission";
import Services from "./pages/Services";
import AcademicsCom from "./pages/AcademicsCom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="admissions" element={<Admission />} />
        <Route path="services" element={<Services />} />
        <Route path="academics" element={<AcademicsCom />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
