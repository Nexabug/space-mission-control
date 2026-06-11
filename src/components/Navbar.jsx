import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <Logo />
      <nav>
        <NavLink to="/"> Home page</NavLink>
        <NavLink to="/crew"> crew page</NavLink>
        <NavLink to="/mission"> mission page</NavLink>
        <NavLink to="/dashboard"> dashboard page</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
