import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={}>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Poduct</NavLink>
    </nav>
  );
};

export default StyledNavbar;
