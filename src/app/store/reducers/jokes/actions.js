import { GET_JOKES_FULFILLED, GET_JOKES_PENDING, GET_JOKES_REJECTED } from "./action-types";

// GET
export const getJokesFulfilled = (payload) => ({
  type: GET_JOKES_FULFILLED,
  payload,
});

export const getJokesPending = () => ({
  type: GET_JOKES_PENDING,
});

export const getJokesRejected = (payload) => ({
  type: GET_JOKES_REJECTED,
  payload,
});
