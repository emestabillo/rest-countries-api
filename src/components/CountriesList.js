import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL = "https://restcountries.eu/rest/v2/all";

const CountriesList = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountries(response.data);
    });
  }, []);

  if (!countries) return null;

  return (
    <>
      {countries.map((country, alpha3Code) => {
        const { name, population, region, capital, flag } = country;
        return (
          <article key={alpha3Code}>
            <Link to={`/countries/${name}`}>
              <img src={flag} alt={`Flag of ${name}`} />
              <h1>{name}</h1>
              <p>Population: {population}</p>
              <p>Region: {region}</p>
              <p>Capital: {capital}</p>
            </Link>
          </article>
        );
      })}
    </>
  );
};

export default CountriesList;
