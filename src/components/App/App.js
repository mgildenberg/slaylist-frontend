import logo from "../../logo.svg";
import "../App/App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
