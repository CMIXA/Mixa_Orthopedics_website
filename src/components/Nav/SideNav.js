import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  ${'' /* flex-flow: row nowrap; */}

  ${'' /* li {
    padding: 18px 10px;
  } */}

  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .navbar-link {
      color: black;
    }
  }
`;

const SideNav = ({ open }) => {
  return (
    <Ul open={open}>  
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
    </Ul>
  )
}

export default SideNav
