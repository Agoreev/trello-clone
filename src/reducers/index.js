import updateDeskList from "./desk-list";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const reducer = (history, state, action) =>
  combineReducers({
    router: connectRouter(history),
    deskList: updateDeskList(state, action)
  });

export default reducer;
