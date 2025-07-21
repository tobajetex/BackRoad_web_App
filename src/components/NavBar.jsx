import React from "react";
import logo from "../assets/images/logo.svg";
import NavLinks from "./navLinks";
import NavIcon from "./NavIcon";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <NavLinks classname1="nav-links" id="nav-links" classname2="nav-link" />
        <NavIcon classname1="nav-icons" classname2="nav-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
