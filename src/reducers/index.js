import { combineReducers } from "redux";
import todos from "./todoReducer";
import movies from "./movieReducer";
export default combineReducers({
  todos,
  movies
});
