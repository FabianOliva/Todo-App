import { useState } from "react";
import React from "react";
import "./index.css";

const ListInput = ({ addTodo, theme }) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="list_Cont">
      <div className="input_Check_Cont">
        <span className="input_Check"></span>
      </div>
      <input
        className="list_Input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleAddTodo(e)}
        placeholder="Create a new todo..."
        style={{
          backgroundColor: theme === "sun" ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)",
          color: theme === "sun" ? "hsl(235, 21%, 11%)" : "rgba(255, 255, 255, 0.87)",
        }}
      />
    </div>
  );
};

export default ListInput;
