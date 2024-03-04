import { getJokesFulfilled, getJokesPending, getJokesRejected } from "./actions";
import { ENDPOINT_GET_JOKES } from "../../../../shared";

export const getJokesThunk = (query) => async (dispatch) => {
  dispatch(getJokesPending());
  try {
    const response = await fetch(`${ENDPOINT_GET_JOKES}?query=${query}`);
    const data = await response.json();

    // на случай, если найдутся тышпитсотмильйон шуток
    const jokes = [];
    for (let i = 0; i < data.total; i++) {
      if (i > 99) break;
      jokes.push(data.result[i]);
    }

    dispatch(getJokesFulfilled({ total: jokes.length, result: jokes }));
  } catch (error) {
    dispatch(getJokesRejected("Что-то пошло не так"));
  }
};
