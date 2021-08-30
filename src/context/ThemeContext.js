import React, { createContext, useState, useLayoutEffect } from "react";
import { darkTheme, lightTheme } from "../utilities/themes";

export const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
});

export const ThemeProvider = (props) => {
  // keeps state of the current chosen theme
  const [dark, setDark] = useState(false);

  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");
    if (lastTheme === "true") {
      setDark(true);
      applyTheme(darkTheme);
    }

    if (!lastTheme || lastTheme === "false") {
      setDark(false);
      applyTheme(lightTheme);
    }
    // if state changes, repaints the app
  }, [dark]);

  // converts arrays to valid CSS text and writes it to root element (<html>)
  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  //save the last user-selected theme to localStorage
  const toggle = () => {
    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";
  };
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
