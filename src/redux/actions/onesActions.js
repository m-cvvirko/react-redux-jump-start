import * as types from "./actionTypes";
import * as courseApi from "../../api/oneApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadOneSuccess(courses) {
  return { type: types.LOAD_ONE_SUCCESS, courses };
}

export function createOneSuccess(course) {
  return { type: types.CREATE_ONE_SUCCESS, course };
}

export function updateOneSuccess(course) {
  return { type: types.UPDATE_ONE_SUCCESS, course };
}

export function deleteOneOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

export function loadOnes() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadOneSuccess(courses));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveOne(one) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return oneApi
      .saveOne(one)
      .then(savedCourse => {
        one.id ? dispatch(updateOneSuccess(savedOne)) : dispatch(createOneSuccess(savedOne));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteOne(one) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteOneOptimistic(one));
    return oneApi.deleteOne(one.id);
  };
}
