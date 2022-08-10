import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import OurServices from "./components/OurServices";
import PatientForms from "./components/PatientForms";
import FAQs from "./components/FAQs"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <>
        <nav>
            <h1>Hello</h1>
            <Link to="/">Home</Link>
            <Link to="/ourservices">Our Services</Link>
            <Link to="/about">About</Link>
            <Link to="/patientforms">Patient Forms</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/contact">Contact</Link>
        </nav>
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ourservices" element={<OurServices />} />
        <Route path="about" element={<About />} />
        <Route path="patientforms" element={<PatientForms />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

    </div>
  );
}


export default App;

