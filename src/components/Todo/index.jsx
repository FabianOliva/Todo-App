import { useState } from "react";
import "./index.css";
import Cross from "../../../public/icon-cross.svg";
import Check from "../../../public/icon-check.svg";

const Todo = ({ todo, handleCompleted, handleDelete, theme }) => {
  const { id, title, completed } = todo;

  return (
    <div
      className="List_Items-Cont"
      style={{ borderBottom: theme === "sun" ? "1px solid rgba(0, 0, 0, 0.05)" : "1px solid rgb(180 180 182 / 46%)" }}>
      <div className="List_Items">
        {completed ? (
          <span
            className="List_Check completed"
            style={{ backgroundColor: theme === "sun" ? "hsl(235, 21%, 11%)" : "hsl(235, 21%, 11%)" }}
            onClick={() => handleCompleted(id)}>
            <img src={Check} alt="Check" />
          </span>
        ) : (
          <span onClick={() => handleCompleted(id)} className="List_Check"></span>
        )}
        <p className="List_Item" style={{ textDecoration: completed && "line-through" }}>
          {title}
        </p>
      </div>
      <img onClick={() => handleDelete(id)} className="crossIcon" src={Cross} alt="CrossIcon" />
    </div>
  );
};

export default Todo;
