import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";

const Navbar = () => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h1>Where in the world?</h1>
      <div>
        <label htmlFor="themeSwitch" className="label">
          <input
            type="checkbox"
            id="themeSwitch"
            className="toggle"
            onClick={() => toggle()}
          />
          <Moon aria-hidden="true" focusable="false" className="moon" />
          {dark ? "Light Mode" : "Dark Mode"}
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
