import React, { useState } from "react";
import TodoTable from "./TodoTable";
import "./Input.css";

const Input = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (text === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  const TodoDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const TodoEdit = (index) => {
    const newText = prompt("Enter your new text");
    if (newText !== null && newText.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[index] = newText;
      setTodos(updatedTodos);
    }
  };

  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="todo-input"
        placeholder="Enter Todo"
      />
      <div>
      <button onClick={addTodo} className="add-btn">
        Add Todo
      </button>
      <button onClick={deleteAll} className="delete-all-btn">
        Delete All
      </button>
      </div>
      <TodoTable todos={todos} TodoDelete={TodoDelete} TodoEdit={TodoEdit} />
    </div>
  );
};

export default Input;
