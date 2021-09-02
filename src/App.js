import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainWrapper from "./components/MainWrapper";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import "./styles/main.scss";

const baseURL = "https://restcountries.eu/rest/v2/all";

function App() {
  const [countries, setCountries] = useState(null);

  //All countries
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log("Error getting countries data: " + error);
      });

    // eslint-disable-next-line
  }, []);

  if (!countries) return null;
  return (
    <Router>
      <Navbar />
      <MainWrapper>
        <Switch>
          <Route exact path="/">
            <Home countries={countries} setCountries={setCountries} />
          </Route>
          <Route path="/countries/:name">
            <CountryDetail countries={countries} />
          </Route>
        </Switch>
      </MainWrapper>
    </Router>
  );
}

export default App;
