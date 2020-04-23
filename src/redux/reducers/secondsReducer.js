import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function secondReducer(state = initialState.seconds, action) {
  switch (action.type) {
    case types.LOAD_SECOND_SUCCESS:
      return action.seconds;
    default:
      return state;
  }
}
