import ReactDom from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { TrelloserviceProvider } from "./components/trello-service-context";
import TrelloService from "./services/trello-service";
import ErrorBoundry from "./components/error-boundry";
import App from "./components/app";
import store, { history } from "./store";

const trelloService = new TrelloService();
ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <TrelloserviceProvider value={trelloService}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </TrelloserviceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
