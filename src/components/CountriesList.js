import React from "react";
import CountryCard from "./CountryCard";

const CountriesList = ({ countries }) => {
  return (
    <>
      <section className="countries-grid">
        {countries.map((country, alpha3Code) => {
          const { name, population, region, capital, flag } = country;
          return (
            <CountryCard
              name={name}
              population={population}
              region={region}
              capital={capital}
              flag={flag}
              key={alpha3Code}
            />
          );
        })}
      </section>
    </>
  );
};

export default CountriesList;
