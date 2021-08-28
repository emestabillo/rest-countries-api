import React from "react";

const SearchBar = ({ searchedTerm, handleChange }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={searchedTerm}
        onChange={handleChange}
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchBar;
