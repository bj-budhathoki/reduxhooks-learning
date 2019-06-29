import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fectchMovies } from "../actions/moviesAction";
const MoviesList = () => {
  const dispatch = useDispatch();

  const getMovies = async () => await dispatch(fectchMovies());
  useEffect(() => {
    getMovies();
  }, []);
  return <div>movie list </div>;
};
export default MoviesList;
