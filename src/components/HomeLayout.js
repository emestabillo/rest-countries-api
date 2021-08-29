import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
// import FilterDropdown from "./FilterDropdown";
import CountriesList from "./CountriesList";

const baseURL = "https://restcountries.eu/rest/v2/all";

const HomeLayout = () => {
  const [allCountries, setAllCountries] = useState(null);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [filteredRegion, setFilteredRegion] = useState("");

  //All countries
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  if (!allCountries) return null;

  const handleSearch = (e) => {
    setSearchedTerm(e.target.value);
  };

  const filteredCountries = !searchedTerm
    ? allCountries
    : allCountries.filter((c) =>
        c.name.toLowerCase().includes(searchedTerm.toLowerCase())
      );

  console.log(filteredCountries);

  // const filteredRegion = countries.filter((country) =>
  //   country.region.toLowerCase().includes(region.toLocaleLowerCase())
  // );
  // ? allCountries.filter(
  //   (country) => country.region === region
  // )
  // ;

  //Filter by region
  // const filterRegions = (region) => {
  //   setAllCountries(
  //     allCountries.filter((country) => country.region === region)
  //   );
  // };

  const handleRegionChange = (e) => {
    setFilteredRegion(e.target.value);
  };

  return (
    <>
      <SearchBar searchedTerm={searchedTerm} handleSearch={handleSearch} />
      <select onChange={handleRegionChange} value={filteredRegion}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <CountriesList
        filteredCountries={filteredCountries}
        filteredRegion={filteredRegion}
      />
    </>
  );
};

export default HomeLayout;
