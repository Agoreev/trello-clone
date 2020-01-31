import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import reducer from "./reducers";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const logMiddleware = () => dispatch => action => {
  console.log(action.type);
  return dispatch(action);
};

const store = createStore(
  reducer(history),
  applyMiddleware(routerMiddleware(history), logMiddleware)
);
export default store;
