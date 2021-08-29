import React from "react";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";

const Navbar = () => {
  return (
    <nav className="navbar wrapper">
      <h1>Where in the world?</h1>
      <div>
        <label htmlFor="themeSwitch" className="label">
          <input type="checkbox" id="themeSwitch" className="toggle" />
          <Moon aria-hidden="true" focusable="false" className="moon" />
          Dark Mode
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
