import React from "react";
import { Link } from "react-router-dom";

const CountriesList = ({ filteredCountries }) => {
  return (
    <>
      {filteredCountries.map((country, alpha3Code) => {
        const { name, population, region, capital, flag } = country;
        return (
          <article key={alpha3Code}>
            <Link to={`/countries/${name}`}>
              <img src={flag} alt={`Flag of ${name}`} />
              <h2>{name}</h2>
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
