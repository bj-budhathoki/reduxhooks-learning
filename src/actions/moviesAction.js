import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS } from "../constants/types";
export const fectchMovies = () => dispatch => {
  console.log(process.env.REACT_APP_URL);
  fetch(`${process.env.REACT_APP_URL}`)
    .then(response => {
      return response.json();
    })
    .then(res => {
      dispatch({
        type: FETCH_MOVIE_SUCCESS,
        payload: res.results
      });
    })
    .catch(error => console.error("Error:", error));
};
