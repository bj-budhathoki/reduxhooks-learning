import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS } from "./constants/types";
const initialState = {
  fetching: false,
  movies: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        fetching: false,
        movies: payload
      };
    default:
      return { ...state };
  }
}
