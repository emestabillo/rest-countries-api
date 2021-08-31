import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import CountriesList from "../components/CountriesList";

const baseURL = "https://restcountries.eu/rest/v2/all";

const HomeLayout = () => {
  const [countries, setCountries] = useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");

  //All countries
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data);
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const results = !searchTerm
      ? countries
      : countries.filter((c) =>
          c.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    setCountries(results);
  }, [searchTerm]);

  if (!countries) return null;

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const filterByRegion = async (region) => {
  //   if (region === "") return;
  //   const res = await fetch(
  //     `https://restcountries.eu/rest/v2/region/${region}`
  //   );
  //   const data = await res.json();
  //   await setCountries(data);
  // };

  return (
    <>
      <SearchBar handleChange={handleChange} searchTerm={searchTerm} />
      <FilterDropdown />
      <CountriesList countries={countries} />
    </>
  );
};

export default HomeLayout;
