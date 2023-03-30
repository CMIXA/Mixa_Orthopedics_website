import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Login from "./components/Login";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
