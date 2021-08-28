import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import CountriesList from "./CountriesList";

const baseURL = "https://restcountries.eu/rest/v2/all";

const HomeLayout = () => {
  const [allCountries, setAllCountries] = useState(null);
  const [searchedTerm, setSearchedTerm] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  if (!allCountries) return null;

  const handleChange = (e) => {
    setSearchedTerm(e.target.value);
  };

  const filteredCountries = !searchedTerm
    ? allCountries
    : allCountries.filter((c) =>
        c.name.toLowerCase().includes(searchedTerm.toLocaleLowerCase())
      );

  return (
    <>
      <SearchBar searchedTerm={searchedTerm} handleChange={handleChange} />
      <FilterDropdown />
      <CountriesList filteredCountries={filteredCountries} />
    </>
  );
};

export default HomeLayout;
