// Nav.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/home" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/main" className="nav-link" activeClassName="active">
            Main
          </NavLink>
        </li>
        {/* Add more NavLink components for additional navigation items */}
      </ul>
    </nav>
  );
};

export default NavBar;
