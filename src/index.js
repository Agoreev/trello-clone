import ReactDom from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { TrelloserviceProvider } from "./components/trello-service-context";
import TrelloService from "./services/trello-service";
import ErrorBoundry from "./components/error-boundry";
import App from "./components/app";
import store from "./store";

const trelloService = new TrelloService();
ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <TrelloserviceProvider value={trelloService}>
        <Router>
          <App />
        </Router>
      </TrelloserviceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
