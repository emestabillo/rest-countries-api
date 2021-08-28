import React from "react";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid salmon",
      }}
    >
      <h1>Where in the world?</h1>
      <div>
        <input
          type="checkbox"
          class="custom-control-input"
          id="customSwitch1"
        />
        <label class="custom-control-label" for="customSwitch1">
          Dark Mode
        </label>
      </div>
    </header>
  );
}

export default Header;
