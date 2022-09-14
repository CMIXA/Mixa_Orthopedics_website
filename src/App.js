import * as React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./About.css";
import "./App.css";
import "./Conditions.css";
import "./Contact.css";
import "./FAQs.css";
import "./Footer.css";
import "./Home.css";
import "./Insurance.css"
import "./OurServices.css";
import "./PatientForms.css";
import About from "./components/About";
import Conditions from "./components/Conditions"
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Insurance from "./components/Insurance";
import OurServices from "./components/OurServices";
import PatientForms from "./components/PatientForms";
import bones1 from "./components/images/bones(1).png";
import menu from "./components/images/hamburger.png";
import Navbar from './components/Nav/Navbar';

function App() {

  return (
    <div className="App">
      <>
        <nav>
          <div className="navbar-wrapper">
            <Link className="navbar-title-wrapper" to="/">
              <div className='navbar-title-image'>
                <img src={bones1} alt="bones"></img>
              </div>
              <div className='navbar-title'>
                  <h1 id="logo-title">Mixa Orthopedics</h1>
              </div>
            </Link>
            <div className="navbar-items">
              <div className="navbar-item">
                <Link className="nav-link" to="/">Home</Link>
              </div>
              <div className="navbar-item dropdown" id="dropdown">
                <Link className="nav-link" to="/ourservices">Our Services <span className="ourservices-arrow">v</span></Link>
                <div className="navbar-items-extra">
                  <Link className="nav-link-extra" id="hover" to="/insurance">Insurance</Link>
                  <Link className="nav-link-extra" id="hover" to="/conditions">Conditions</Link>
                </div>
              </div>
              <div className="navbar-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </div>
              <div className="navbar-item">
                <Link className="nav-link" to="/patientforms">Patient Forms</Link>
              </div>
              <div className="navbar-item">
                <Link className="nav-link" to="/faqs">FAQs</Link>
              </div>
              <div className="navbar-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </div>
            </div>
            <div className="menu-icon">
              <img src={menu} alt="menu"></img>
            </div>
          </div>
        </nav>
        <Navbar />
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ourservices" element={<OurServices />} />
        <Route path="about" element={<About />} />
        <Route path="patientforms" element={<PatientForms />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="insurance" element={<Insurance />} />
        <Route path="conditions" element={<Conditions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

