import React from "react";
import { Provider } from "react-redux";
import store from "./config/store";
import TodoInput from "./components/TodoInput";
import Todo from "./components/Todo";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoInput />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
