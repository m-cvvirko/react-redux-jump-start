import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/seconds/";

export function getSeconds() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
