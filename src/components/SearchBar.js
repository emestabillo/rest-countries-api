import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

const SearchBar = ({ handleChange, countrySearch }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      <SearchIcon className={`search__icon ${dark ? "dark" : ""}`} />
      <input
        type="text"
        aria-label="search countries"
        className="search__input"
        onChange={handleChange}
        value={countrySearch}
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchBar;
