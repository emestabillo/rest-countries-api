import React from "react";

const SearchBar = ({ searchedTerm, handleSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={searchedTerm}
        onChange={handleSearch}
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchBar;
