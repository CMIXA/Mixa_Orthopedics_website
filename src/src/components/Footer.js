import React from "react";
import "../css/Footer.css";
import logo from "../images/logo.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import reddit from "../images/reddit.png";
import youtube from "../images/youtube.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-s1">
          <div className="footer-logo">
            <img src={logo} />
            <p>Immersive Insights</p>
          </div>
          <div className="footer-sociallinks">
            <img src={instagram} />
            <img src={youtube} />
            <img src={facebook} />
            <img src={linkedin} />
            <img src={twitter} />
            <img src={reddit} />
          </div>
        </div>
        <div className="footer-s2">
          <div className="footer-s2-container">
            <div className="services">
              <p>Services</p>
              <ul>
                <li>
                  <a href="/MUT">Moderated Testing</a>
                </li>
                <li>
                  <a href="/UUT">Umoderated Testing</a>
                </li>
                <li>
                  <a href="/UI">User Interviews</a>
                </li>
              </ul>
              {/* <div className="services-links">
                <a>Moderated Testing</a>
                <a>Umoderated Testing</a>
                <a>User Interviews</a>
              </div> */}
            </div>
            <div className="resources">
              <p>Resources</p>
              <ul>
                <li>
                  <a href="/guides">Guides</a>
                </li>
                <li>
                  <a href="/tools">Tools</a>
                </li>
                <li>
                  <a href="/glossary">Glossary</a>
                </li>
              </ul>
            </div>
            <div className="pricing">
              <a>Pricing</a>
            </div>
            <div className="aboutus">
              <a>About us</a>
            </div>
            <div className="contactus">
              <a>Contact us</a>
            </div>
          </div>
        </div>
        <div className="footer-s3">
          <div className="footer-s3-container">
            <div className="footer">
              <a href="/">Privacy</a>
              <a href="/">Accessability</a>
              <a href="/">Terms</a>
              <a href="/">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
