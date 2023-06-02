import { useState } from "react";
import "./index.css";

const Todo = ({ todo, handleCompleted, handleDelete }) => {
  const { id, title, completed } = todo;

  return (
    <div className="List_Items-Cont">
      <div className="List_Items">
        {completed ? (
          <img
            onClick={() => handleCompleted(id)}
            className="List_Check completed"
            src="public/icon-check.svg"
            alt="Check"
          />
        ) : (
          <span onClick={() => handleCompleted(id)} className="List_Check"></span>
        )}
        <p className="List_Item">{title}</p>
      </div>
      <img onClick={() => handleDelete(id)} className="crossIcon" src="public/icon-cross.svg" alt="CrossIcon" />
    </div>
  );
};

export default Todo;
