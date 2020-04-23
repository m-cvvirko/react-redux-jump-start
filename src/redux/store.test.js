import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as oneActions from "./actions/onesActions";

it("Should handle creating ones", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const one = {
    title: "ONE"
  };

  // act
  const action = oneActions.createOneSuccess(one);
  store.dispatch(action);

  // assert
  const createdOne = store.getState().ones[0];
  expect(createdOne).toEqual(one);
});
