import React, { useState } from "react";
import uuid from "uuid/v4";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const onChange = event => {
    setTodo(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(
      addTodo({
        id: uuid(),
        name: todo,
        complete: false
      })
    );
    setTodo("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default TodoInput;
