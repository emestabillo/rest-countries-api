import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as Chevron } from "../assets/icon-chevron.svg";

const FilterDropdown = ({ setRegionSearch }) => {
  const { dark } = useContext(ThemeContext);
  const [droppedDown, setDroppedDown] = useState(false);

  const regions = ["africa", "america", "asia", "europe", "oceania", "polar"];

  const showFilterOptions = () => {
    setDroppedDown(!droppedDown);
  };

  const handleRegionClick = (e) => {
    if (e) {
      setRegionSearch(e.target.innerText);
      showFilterOptions();
    } else {
      setRegionSearch("");
    }
  };

  return (
    <div className="filter">
      <button onClick={() => showFilterOptions()} className="filter__button">
        Filter by Region
        <Chevron
          className={`filter__icon ${droppedDown ? "rotate" : ""} ${
            dark ? "white" : ""
          }`}
        />
      </button>
      <ul className={`filter__container ${droppedDown ? "active" : ""}`}>
        {regions.map((region) => {
          return (
            <li
              key={region}
              className="filter__item"
              onClick={handleRegionClick}
            >
              {region}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterDropdown;
