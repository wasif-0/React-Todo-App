import React from "react";
import "./TodoTable.css";

const TodoTable = ({ todos, TodoDelete, TodoEdit }) => {
  return (
    <div className="todo-table">
      <ul>
        {todos.map((element, index) => (
          <li key={index} className="todo-item">
            {element}
            <button
              onClick={() => TodoDelete(index)}
              className="delete-btn"
            >
              X
            </button>
            <button onClick={() => TodoEdit(index)} className="edit-btn">
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoTable;
