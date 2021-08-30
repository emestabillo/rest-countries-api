import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const CountryCard = ({ name, population, region, capital, flag }) => {
  return (
    <Col as="article" md={6} xl={3} className="card">
      <Link to={`/countries/${name}`} className="card__link">
        <img src={flag} alt={`Flag of ${name}`} className="card__flag" />
        <div className="card__info">
          <h2>{name}</h2>
          <ul className="list">
            <li className="list__item">
              <span className="list__label">Population: </span>
              {population}
            </li>
            <li className="list__item">
              <span className="list__label">Region: </span>
              {region}
            </li>
            {capital && (
              <li className="list__item">
                <span className="list__label">Capital: </span>
                {capital}
              </li>
            )}
          </ul>
        </div>
      </Link>
    </Col>
  );
};

export default CountryCard;
