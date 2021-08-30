import React from "react";

const FilterDropdown = ({ handleRegionChange, filteredRegion }) => {
  return (
    <select
      onChange={handleRegionChange}
      value={filteredRegion}
      name="region"
      className="select"
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default FilterDropdown;
