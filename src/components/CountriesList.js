import React from "react";
import { Link } from "react-router-dom";
import { Row, Container } from "react-bootstrap";

const CountriesList = ({ filteredCountries }) => {
  return (
    <>
      <Row as="section" className="col-12 col-md-6 col-lg-4">
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
      </Row>
    </>
  );
};

export default CountriesList;
