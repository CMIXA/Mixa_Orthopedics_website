import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <>
        <nav>
            <h1>Hello</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}


export default App;

