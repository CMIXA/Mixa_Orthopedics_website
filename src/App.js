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
          <div className="nav-links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/ourservices">Our Services</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/patientforms">Patient Forms</Link>
            <Link className="nav-link" to="/faqs">FAQs</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
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
      <div className="footer">
        <div className='footer-wrapper'>
                <div className='column-1'></div>
                <div className='column-2'></div>
                <div className='column-3'></div>
            </div>
      </div>
    </div>
  );
}


export default App;

