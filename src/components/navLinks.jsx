import React from "react";
import { navlinks } from "./db";

const NavLinks = ({ classname1, id, classname2 }) => {
  return (
    <ul className={classname1} id={id ? id : ""}>
      {id === "nav-links" ? HeaderLinks(classname2) : FooterLinks(classname2)}
    </ul>
  );
};
const HeaderLinks = (classname2) => {
  return navlinks
    .filter((item) => item !== "Featured")
    .map((link, index) => {
      return (
        <li key={index}>
          <a href={`#${link}`} className={classname2}>
            {" "}
            {link}
          </a>
        </li>
      );
    });
};
const FooterLinks = (classname2) => {
  return navlinks
    .filter((item) => item !== "Tour")
    .map((link, index) => {
      return (
        <li key={index}>
          <a href={`#${link}`} className={classname2}>
            {" "}
            {link}
          </a>
        </li>
      );
    });
};

export default NavLinks;
