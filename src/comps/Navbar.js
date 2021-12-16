import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul id="nav">
        <li>
        <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
        <NavLink activeClassName="active" to="/Search">Search</NavLink>
        </li>
        <li>
        <NavLink activeClassName="active" to="/Add">Add</NavLink>
        </li>
        <li>
        <NavLink activeClassName="active" to="/Edit">Edit</NavLink>
        </li>
        <li>
        <NavLink activeClassName="active" to="/Gallery">Gallery</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
