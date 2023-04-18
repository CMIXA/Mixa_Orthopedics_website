import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <nav className={visible ? "nav nav-fixed" : "nav"}>
      <div className="navbar">
        <div>
          <a className="title-container" href="/">
            <img className="logo" src={logo} />
            <h1 className="title">Immersive Insights</h1>
          </a>
        </div>
        <ul className="navlinks">
          <li class="navbar-item navbar-dropdown">
            <a href="/services">Services</a>
            <ul class="dropdown-menu">
              <li class="dropdown-item">
                <a href="/moderatedtesting">Moderated Testing</a>
              </li>
              <li class="dropdown-item">
                <a href="/unmoderatedtesting">Unmoderated Testing</a>
              </li>
              <li class="dropdown-item">
                <a href="/userinterviews">User Interviews</a>
              </li>
            </ul>
          </li>
          <li class="navbar-item navbar-dropdown">
            <a href="/resources">Resources</a>
            <ul class="dropdown-menu">
              <li class="dropdown-item">
                <a href="/guides">Guides</a>
              </li>
              <li class="dropdown-item">
                <a href="/tools">Tools</a>
              </li>
              <li class="dropdown-item">
                <a href="/glossary">Glossary</a>
              </li>
            </ul>
          </li>
          <li class="navbar-item">
            <a href="/pricing">Pricing</a>
          </li>
          <li class="navbar-item">
            <a href="/aboutus">About us</a>
          </li>
          <li class="navbar-item">
            <a href="/contactus">Contact us</a>
          </li>
        </ul>
        <div className="login-paid">
          <a href="/login">Log in</a>
          <button>Get paid to test</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
