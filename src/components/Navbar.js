import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../assets/icon-sun.svg";

const Navbar = () => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="wrapper navbar__wrapper">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <div>
          <label htmlFor="themeSwitch" className="label">
            <input
              type="checkbox"
              id="themeSwitch"
              className="toggle"
              onClick={() => toggle()}
            />
            {dark ? (
              <Sun
                aria-hidden="true"
                focusable="false"
                className="theme-icon sun"
              />
            ) : (
              <Moon
                aria-hidden="true"
                focusable="false"
                className="theme-icon"
              />
            )}
            {dark ? "Light Mode" : "Dark Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
