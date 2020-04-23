import * as types from "./actionTypes";
import * as secondApi from "../../api/secondApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadSecondsSuccess(seconds) {
  return { type: types.LOAD_SECOND_SUCCESS, seconds };
}

export function loadSeconds() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return secondApi
      .getSeconds()
      .then(seconds => {
        dispatch(loadSecondsSuccess(seconds));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
