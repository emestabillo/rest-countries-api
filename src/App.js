import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainWrapper from "./components/MainWrapper";
import HomeLayout from "./components/HomeLayout";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <MainWrapper>
        <Route exact path="/">
          <HomeLayout />
        </Route>
        <Route path="/countries/:name" children={<CountryDetail />}></Route>
      </MainWrapper>
    </Router>
  );
}

export default App;
