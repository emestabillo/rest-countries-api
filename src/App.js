import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MainWrapper from "./components/MainWrapper";
// import SearchBar from "./components/SearchBar";
// import FilterDropdown from "./components/FilterDropdown";
import CountriesList from "./components/CountriesList";
import Country from "./components/Country";
import SearchBar from "./components/SearchBar";
import FilterDropdown from "./components/FilterDropdown";

function App() {
  return (
    <Router>
      <Header />
      <MainWrapper>
        <Switch>
          <Route exact path="/">
            <SearchBar />
            <FilterDropdown />
            <CountriesList />
          </Route>
          <Route path="/countries/:name" children={<Country />}></Route>
        </Switch>
      </MainWrapper>
    </Router>
  );
}

export default App;
