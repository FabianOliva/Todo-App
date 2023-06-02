import { useState } from "react";
import React from "react";
import "./index.css";

const ListInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(title);
      setTitle(title);
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
        placeholder="What's next..."
      />
    </div>

    // <div>
    //   <div>
    //     <input className="header_Input " type="text" onInput={handleInput} value={numeroIngresado} />
    //     <button onClick={handleClick}></button>
    //   </div>
    //   <div>
    //     <ul>
    //       {numeros.map((elemento, i) => {
    //         return <li key={i}>{elemento}</li>;
    //       })}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default ListInput;
