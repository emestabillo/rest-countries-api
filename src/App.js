import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainWrapper from "./components/MainWrapper";
import HomeLayout from "./pages/HomeLayout";
import CountryDetail from "./pages/CountryDetail";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <MainWrapper>
        <Switch>
          <Route exact path="/">
            <HomeLayout />
          </Route>
          <Route path="/countries/:name">
            <CountryDetail />
          </Route>
        </Switch>
      </MainWrapper>
    </Router>
  );
}

export default App;
