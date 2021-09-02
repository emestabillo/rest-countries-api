import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import CountriesList from "../components/CountriesList";

const Home = ({ countries }) => {
  const [countrySearch, setCountrySearch] = useState("");
  const [regionSearch, setRegionSearch] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) &&
      country.region.toLowerCase().includes(regionSearch.toLowerCase())
  );

  const handleChange = (e) => setCountrySearch(e.target.value);

  return (
    <>
      <header className="header">
        <SearchBar handleChange={handleChange} countrySearch={countrySearch} />
        <FilterDropdown setRegionSearch={setRegionSearch} />
      </header>
      <CountriesList countries={filteredCountries} />
    </>
  );
};

export default Home;
