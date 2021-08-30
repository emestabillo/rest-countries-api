import React from "react";

const FilterDropdown = ({ filterByRegion }) => {
  return (
    <select
      onChange={(val) => filterByRegion(val.target.value)}
      name="region"
      className="select"
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default FilterDropdown;
