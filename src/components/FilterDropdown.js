import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ReactComponent as Chevron } from "../assets/icon-chevron.svg";

const FilterDropdown = ({ filterByRegion }) => {
  const { dark } = useContext(ThemeContext);
  const [filter, setFilter] = useState("");
  const [droppedDown, setDroppedDown] = useState(false);
  const listItem = [...document.querySelectorAll(".filter__item")];

  const showFilterOptions = () => {
    setDroppedDown(!droppedDown);
  };

  // const handleRegionClick = (filterByRegion) => {
  //   setFilter(filterByRegion(val.target.value));
  //   setDroppedDown(!droppedDown);
  // };

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
          value="africa"
          onClick={(val) => filterByRegion(val.target.value)}
        >
          Africa
        </li>
        <li
          className="filter__item"
          value="americas"
          onClick={(val) => filterByRegion(val.target.value)}
        >
          Americas
        </li>
        <li
          className="filter__item"
          value="asia"
          onClick={(val) => filterByRegion(val.target.value)}
        >
          Asia
        </li>
        <li
          className="filter__item"
          value="europe"
          onClick={(val) => filterByRegion(val.target.value)}
        >
          Europe
        </li>
        <li
          className="filter__item"
          value="oceania"
          onChange={(val) => filterByRegion(val.target.value)}
        >
          Oceania
        </li>
        <li
          className="filter__item"
          value="asia"
          onClick={(val) => filterByRegion(val.target.value)}
        >
          Polar
        </li>
      </ul>
    </div>
  );
};

export default FilterDropdown;
