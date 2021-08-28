import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid salmon",
      }}
    >
      <h1>Where in the world?</h1>
      <div>
        <input type="checkbox" id="customSwitch1" />
        <label htmlFor="customSwitch1">Dark Mode</label>
      </div>
    </nav>
  );
};

export default Navbar;
