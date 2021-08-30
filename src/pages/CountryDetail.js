import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Arrow } from "../assets/icon-arrow.svg";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  // //Create history reference
  // let history = useHistory();

  // //get country alpha3Code from url
  // let { countryCode } = useParams();

  // //filter through data and find matching country
  // let countryData = filteredCountries.filter((country) =>
  //   country.alpha3Code.toLowerCase().includes(countryCode)
  // )[0];

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => {
        setCountry(response.data);
        console.log(country);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Link to="/" className="back">
        <Arrow />
        Back
      </Link>
      {country.map((c) => {
        const {
          flag,
          name,
          nativeName,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
        } = c;

        return (
          <article>
            <img src={flag} alt={`Flag of ${name}`} />
            <h2>{name}</h2>
            <ul style={{ columnCount: 2 }}>
              <li>
                <span>Native Name:</span>
                {nativeName}
              </li>
              <li>
                <span>Population:</span>
                {population}
              </li>
              <li>
                <span>Region:</span>
                {region}
              </li>
              <li>
                <span>Sub Region:</span>
                {subregion}
              </li>
              <li>
                <span>Capital:</span>
                {capital}
              </li>
              <li>
                <span>Top Level Domain:</span>
                {topLevelDomain}
              </li>
              <li>
                <span>Currencies:</span>
                {currencies[0].name}
              </li>
              <li>
                <span>Languages:</span>
                {languages[0].name}
              </li>
            </ul>
            {borders && (
              <div>
                Border Countries:{" "}
                {borders.map((b) => {
                  return <Link to={`/countries/${country.b}`}>{b}</Link>;
                })}
              </div>
            )}
          </article>
        );
      })}
    </>
  );
};

export default CountryDetail;
