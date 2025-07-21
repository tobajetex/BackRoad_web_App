import React from "react";
import { navIcons } from "./db";
const NavIcon = ({ classname1, classname2 }) => {
  return (
    <div>
      <ul className={classname1}>
        {navIcons.map((navIcon, index) => {
          const { links, socialIcon } = navIcon;
          return (
            <li key={index}>
              <a href={links} target="_blank" className={classname2}>
                <i className={socialIcon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavIcon;
