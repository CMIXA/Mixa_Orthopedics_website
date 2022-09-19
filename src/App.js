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
import menu from "./components/images/hamburger.png";
import Navbar from './components/Nav/Navbar';

function App() {

  return (
    <div className="App">
      <>
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

