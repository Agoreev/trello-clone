import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { DesksPage } from "../pages";
import "./app.css";
import logo from "./logo.png";

const App = () => {
  return (
    <div className="app container">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <Switch>
        <Route path="/" exact component={DesksPage} />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </div>
  );
};

export default App;
