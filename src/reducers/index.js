import updateDeskList from "./desk-list";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const reducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    deskList: updateDeskList
  });

export default reducer;
