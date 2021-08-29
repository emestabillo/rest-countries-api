import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <Nav as="nav">
      <h1>Where in the world?</h1>
      <div>
        <input type="checkbox" id="customSwitch1" />
        <label htmlFor="customSwitch1">Dark Mode</label>
      </div>
    </Nav>
  );
};

export default Navbar;
