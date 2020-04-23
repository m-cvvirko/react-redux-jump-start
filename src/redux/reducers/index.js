import { combineReducers } from "redux";
import ones from "./onesReducer";
import seconds from "./secondsReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  ones,
  seconds,
  apiCallsInProgress
});

export default rootReducer;
