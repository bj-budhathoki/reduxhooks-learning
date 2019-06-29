export const addTodo = item => dispatch => {
  console.log(item);
  dispatch({
    type: "ADD_TODO",
    payload: item
  });
};
export const deleteTodo = id => dispatch => {
  dispatch({
    type: "DELETE_TODO",
    payload: id
  });
};
