import React from "react";
import { NAV_BAR_DATA } from "./constants.js";
import { Link } from "react-router-dom";

import "./styles.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {NAV_BAR_DATA.map(({ id, url, label }) => (
          <li className="nav__link" key={id}>
            <Link to={url}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
