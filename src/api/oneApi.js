import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/ones/";

export function getOnes() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveOne(one) {
  return fetch(baseUrl + (one.id || ""), {
    method: one.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(one)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteOne(oneId) {
  return fetch(baseUrl + oneId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
