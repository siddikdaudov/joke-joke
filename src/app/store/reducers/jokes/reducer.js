import { GET_JOKES_FULFILLED, GET_JOKES_PENDING, GET_JOKES_REJECTED } from "./action-types";

const INITIAL_STATE = {
  jokes: [],
  isLoading: false,
  error: null,
  total: 0,
};

export const jokes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET
    case GET_JOKES_FULFILLED:
      return {
        ...state,
        jokes: action.payload.result,
        isLoading: false,
        error: null,
        total: action.payload.total,
      };

    case GET_JOKES_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case GET_JOKES_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
