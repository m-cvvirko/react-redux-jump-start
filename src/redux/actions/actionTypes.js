export const CREATE_ONE = "CREATE_ONE";
export const LOAD_ONE_SUCCESS = "LOAD_ONE_SUCCESS";
export const LOAD_SECOND_SUCCESS = "LOAD_SECOND_SUCCESS";
export const CREATE_ONE_SUCCESS = "CREATE_ONE_SUCCESS";
export const UPDATE_ONE_SUCCESS = "UPDATE_ONE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_ONE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
