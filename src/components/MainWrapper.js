import React from "react";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

const MainWrapper = ({ children }) => {
  return (
    <main>
      <SearchBar />

      {children}
    </main>
  );
};

export default MainWrapper;
