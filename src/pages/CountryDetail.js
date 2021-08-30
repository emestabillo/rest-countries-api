import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Arrow } from "../assets/icon-arrow.svg";
import { Col, Row } from "react-bootstrap";

const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const { dark } = useContext(ThemeContext);

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
        <Arrow className={`${dark ? "white-arrow" : ""}`} />
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
          <Row as="article" className="detail-card">
            <Col lg={6}>
              <img
                src={flag}
                alt={`Flag of ${name}`}
                className="detail-card__flag "
              />
            </Col>
            <Col className="facts lg={6}">
              <h1 className="detail-card__name">{name}</h1>
              <div className="detail-card__list">
                <ul className="detail-card__column">
                  <li className="detail-card__item">
                    <span className="item-label">Native Name: </span>
                    {nativeName}
                  </li>
                  <li className="detail-card__item">
                    <span className="item-label">Population: </span>
                    {population.toLocaleString()}
                  </li>
                  <li className="detail-card__item">
                    <span className="item-label">Region: </span>
                    {region}
                  </li>
                  {subregion && (
                    <li className="detail-card__item">
                      <span className="item-label">Sub Region: </span>
                      {subregion}
                    </li>
                  )}
                  {capital && (
                    <li className="detail-card__item">
                      <span className="item-label">Capital: </span>
                      {capital}
                    </li>
                  )}
                </ul>
                <ul className="detail-card__column">
                  <li className="detail-card__item">
                    <span className="item-label">Top Level Domain: </span>
                    {topLevelDomain}
                  </li>
                  {currencies.length > 0 && (
                    <li className="detail-card__item">
                      <span className="item-label">Currencies: </span>
                      {currencies.map((currency, i) => {
                        if (
                          currencies.length === 1 ||
                          i === currencies.length - 1
                        )
                          return currency.name;
                        else return `${currency.name}, `;
                      })}
                    </li>
                  )}
                  {languages.length > 0 && (
                    <li className="detail-card__item">
                      <span className="item-label">Languages: </span>
                      {languages.map((language, i) => {
                        if (
                          languages.length === 1 ||
                          i === languages.length - 1
                        )
                          return language.name;
                        else return `${language.name}, `;
                      })}
                    </li>
                  )}
                </ul>
              </div>
              {borders.length > 0 && (
                <div className="borders">
                  <h2 className="borders__heading">Border Countries:</h2>
                  <div className="borders__container">
                    {borders.map((border, i) => {
                      return (
                        <Link
                          to={`/countries/${name}`}
                          className="borders__link"
                          key={i}
                        >
                          {border}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default CountryDetail;
