import oneReducer from "./onesReducer";
import * as actions from "../actions/onesActions";

it("should add one when passed CREATE_ONE_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      title: "A"
    },
    {
      title: "B"
    }
  ];

  const newOne = {
    title: "C"
  };

  const action = actions.createOneSuccess(newOne);

  // act
  const newState = oneReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update one when passed UPDATE_ONE_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
  ];

  const one = { id: 2, title: "New One" };
  const action = actions.updateOneSuccess(one);

  // act
  const newState = oneReducer(initialState, action);
  const updatedOne = newState.find(a => a.id == one.id);
  const untouchedOne = newState.find(a => a.id == 1);

  // assert
  expect(updatedOne.title).toEqual("New One");
  expect(untouchedOne.title).toEqual("A");
  expect(newState.length).toEqual(3);
});
