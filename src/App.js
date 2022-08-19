import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./About.css";
import "./App.css";
import "./Contact.css";
import "./FAQs.css";
import './Footer.css';
import "./OurServices.css";
import "./PatientForms.css";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import OurServices from "./components/OurServices";
import PatientForms from "./components/PatientForms";


function App() {

  // const menuIcon = document.getElementsByClassName('menu-icon')[0]
  // const navbarItems = document.getElementsByClassName('navbar-items')[0]

  // menuIcon.addEventListener('click', () => {
  //   navbarItems.classList.toggle('active')
  // }) 

  return (
    <div className="App">
      <>
        <nav>
          <div className="navbar-wrapper">
            <div className="navbar-title-wrapper">
              <div className='navbar-title-image'>
                <img src='bones.png' alt="bones"></img>
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
              <img src="more.png" alt="menu"></img>
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
      <Footer />
    </div>
  );
}

export default App;

