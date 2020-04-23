import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function oneReducer(state = initialState.ones, action) {
  switch (action.type) {
    case types.CREATE_ONE_SUCCESS:
      return [...state, { ...action.one }];
    case types.UPDATE_ONE_SUCCESS:
      return state.map(one =>
        one.id === action.one.id ? action.one : one
      );
    case types.LOAD_ONE_SUCCESS:
      return action.ones;
    case types.DELETE_ONE_OPTIMISTIC:
      return state.filter(one => one.id !== action.one.id);
    default:
      return state;
  }
}
