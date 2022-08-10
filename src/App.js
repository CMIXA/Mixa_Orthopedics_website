import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import './footer.css';
import Home from "./components/Home";
import About from "./components/About";
import OurServices from "./components/OurServices";
import PatientForms from "./components/PatientForms";
import FAQs from "./components/FAQs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <>
        <nav>
          <div className="navbar-wrapper">
            <div className="navbar-title-wrapper">
              <div className='navbar-title-image'>
                <img src='bones.png'></img>
              </div>
              <div className='navbar-title'>
                  <h1>Mixa Orthopedics</h1>
              </div>
            </div>
            <div className="navbar-items">
              <div className="navbar-item">
                <Link className="nav-link" to="/">Home</Link>
              </div>
              <div className="navbar-item">
                <Link className="nav-link" to="/ourservices">Our Services</Link>
              </div>
              <div className="navbar-item">
                <Link className="nav-link" to="/about">About</Link>
              </div>
              <div className="navbar-item">
                <Link className="nav-link" to="/patientforms">Patient Forms</Link>
              </div>
              <div className="navbar-item">
                <Link className="nav-link" to="/
                faqs">FAQs</Link>
              </div>
              <div className="navbar-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </div>
            </div>
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
      {/* <div className="footer">
        <div className='footer-wrapper'>
                <div className='column-1'></div>
                <div className='column-2'></div>
                <div className='column-3'></div>
            </div>
      </div> */}
      <Footer />
    </div>
  );
}


export default App;

