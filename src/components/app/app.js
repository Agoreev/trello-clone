import React from "react";
import { Route, Switch } from "react-router-dom";
import { DesksPage } from "../pages";

const App = () => {
  return (
    <div className="app container">
      <Switch>
        <Route path="/" exact component={DesksPage} />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </div>
  );
};

export default App;
