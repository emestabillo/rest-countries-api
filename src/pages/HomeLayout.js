import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import CountriesList from "../components/CountriesList";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";
const baseURL = "https://restcountries.eu/rest/v2/all";

const HomeLayout = () => {
  const [allCountries, setAllCountries] = useState(null);
  const { dark } = useContext(ThemeContext);
  //All countries
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  if (!allCountries) return null;

  const filterByRegion = async (region) => {
    if (region === "") return;
    const res = await fetch(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
    const data = await res.json();
    await setAllCountries(data);
  };

  const searchCountry = async (term) => {
    if (term.length < 3 || term === "") return;
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${term}`);
    const data = await res.json();
    await console.log(data);
    await setAllCountries(data);
  };

  return (
    <>
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <SearchIcon className={`search__icon ${dark ? "dark" : ""}`} />
        <input
          type="text"
          className="search__input"
          onChange={(e) => searchCountry(e.target.value)}
          placeholder="Search for a country..."
        />
      </form>
      <FilterDropdown filterByRegion={filterByRegion} />
      <CountriesList allCountries={allCountries} />
    </>
  );
};

export default HomeLayout;
