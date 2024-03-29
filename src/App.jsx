import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, doneTodo } from "./redux/todoSlice";

function App() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.reducer.todos);
  const achievedTodo = useSelector((state) => state);
  console.log(achievedTodo);
  console.log(todos);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDoneTodo = (id) => {
    dispatch(doneTodo(id));
  };

  return (
    <div className="wrapper">
      <div className="taskForm">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTodo}>+</button>
      </div>

      <ul>
        <span>Task to do-{todos.length}</span>
        {todos.map((todo) => (
          <div className="tasks_todo">
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-true" : "false",
                }}
              >
                {todo.text}
              </span>
              <div>
                <span className="done" onClick={() => handleDoneTodo(todo.id)}>
                  <img src="./public/true.png" alt="" />
                </span>

                <span
                  className="span"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  <img src="./public/delete.png" alt="" />
                </span>
              </div>
            </li>
          </div>
        ))}

        {/* <div>
          <h2>Finished Tasks - {achievedTodo.length}</h2>
          <ul>
            {achievedTodo.map((todo) => (
              <div className="tasks_todo" key={todo.id}>
                <li>
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                  <div>
                    <span
                      className="done"
                      onClick={() => handleDoneTodo(todo.id)}
                    >
                      <img src="./public/true.png" alt="" />
                    </span>

                    <span
                      className="span"
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      <img src="./public/delete.png" alt="" />
                    </span>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div> */}
      </ul>
    </div>
  );
}

export default App;
