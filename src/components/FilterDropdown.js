import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as Chevron } from "../assets/icon-chevron.svg";

const FilterDropdown = ({ filterByRegion }) => {
  const { dark } = useContext(ThemeContext);
  const [filter, setFilter] = useState("");
  const [droppedDown, setDroppedDown] = useState(false);
  // const listItem = [...document.querySelectorAll(".filter__item")];

  const showFilterOptions = () => {
    setDroppedDown(!droppedDown);
  };

  const handleRegionClick = (region, dataset) => {
    setFilter(dataset.region);
    setDroppedDown(!droppedDown);
  };

  // listItem.forEach((region) =>
  //   region.addEventListener("click", (e) => {
  //     setFilter(e.target.dataset.region);
  //     setDroppedDown(!droppedDown);
  //   })
  // );

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
        <li
          className="filter__item"
          data-region="Africa"
          onClick={handleRegionClick}
        >
          Africa
        </li>
        <li
          className="filter__item"
          data-region="Americas"
          onClick={handleRegionClick}
        >
          Americas
        </li>
        <li
          className="filter__item"
          data-region="Asia"
          onClick={handleRegionClick}
        >
          Asia
        </li>
        <li
          className="filter__item"
          data-region="Europe"
          onClick={handleRegionClick}
        >
          Europe
        </li>
        <li
          className="filter__item"
          data-region="Oceania"
          onClick={handleRegionClick}
        >
          Oceania
        </li>
      </ul>
    </div>
  );
};

export default FilterDropdown;
