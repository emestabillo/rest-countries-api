import React from "react";

const MainWrapper = ({ children }) => {
  return (
    <main>
      <div className="wrapper">{children}</div>
    </main>
  );
};

export default MainWrapper;
