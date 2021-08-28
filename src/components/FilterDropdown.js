import React, { useState } from "react";

const FilterDropdown = () => {
  return (
    <select>
      <option value="">Filter by Region</option>
      <option value="1">Africa</option>
      <option value="2">America</option>
      <option value="3">Europe</option>
      <option value="3">Oceania</option>
    </select>
  );
};

export default FilterDropdown;