import React from "react";
import NavLinks from "./navLinks";
import NavIcon from "./NavIcon";
const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <NavLinks classname1="footer-links" id="" classname2="footer-link" />

        <NavIcon classname1="footer-icons" classname2="footer-icon" />

        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
