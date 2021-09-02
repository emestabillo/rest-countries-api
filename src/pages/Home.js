import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";

import FilterDropdown from "../components/FilterDropdown";
import CountriesList from "../components/CountriesList";

const baseURL = "https://restcountries.eu/rest/v2/all";

const Home = () => {
  const [countries, setCountries] = useState(null);
  const [countrySearch, setCountrySearch] = useState("");
  const [regionSearch, setRegionSearch] = useState("");

  //All countries
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log("Error getting countries data: " + error);
      });

    // eslint-disable-next-line
  }, []);

  if (!countries) return null;

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
