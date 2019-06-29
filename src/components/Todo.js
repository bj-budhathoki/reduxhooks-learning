import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions/todoActions";
const Todo = () => {
  const { items } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const deleteItem = id => dispatch(deleteTodo(id));

  return (
    <ul className="todo-list" style={{ listStyleType: "none" }}>
      {items.map(todo => (
        <li key={todo.id}>
          {todo.name}
          <span
            className="delete-button"
            style={{ color: "red", marginLeft: "1.2rem" }}
            onClick={() => deleteItem(todo.id)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};
export default Todo;
