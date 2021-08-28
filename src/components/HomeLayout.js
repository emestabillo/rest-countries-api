import React from "react";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import CountriesList from "./CountriesList";

const HomeLayout = () => {
  return (
    <>
      <SearchBar />
      <FilterDropdown />
      <CountriesList />
    </>
  );
};

export default HomeLayout;
