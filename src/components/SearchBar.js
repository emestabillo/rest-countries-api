import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

const SearchBar = ({ searchCountry }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      <SearchIcon className={`search__icon ${dark ? "dark" : ""}`} />
      <input
        type="text"
        className="search__input"
        onChange={(e) => searchCountry(e.target.value)}
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchBar;
