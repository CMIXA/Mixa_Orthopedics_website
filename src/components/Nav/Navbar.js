import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { Link } from "react-router-dom";
// import bones1 from "./components/images/bones(1).png";
// import bones1 from "./"

const Nav = styled.nav`

  ${'' /* .logo {
    padding: 15px 0;
  } */}
`

const Navbar = () => {
  return (
    <Nav>
      <nav>
        <div className="navbar-wrapper">
          <Link className="navbar-title-wrapper" to="/">
            {/* <div className='navbar-title-image'>
              <img src={bones1} alt="bones"></img>
            </div> */}
            <div className='logo'>
              <img src='bones.png'></img>
            </div>
            <div className='navbar-title'>
                <h1 id="logo-title">Mixa Orthopedics</h1>
            </div>
          </Link>
          <Menu />
        </div>
      </nav>
    </Nav>
  )
}

export default Navbar
