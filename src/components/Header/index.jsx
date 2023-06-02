import "./index.css";
import { useEffect, useState } from "react";
import ListInput from "../ListInput";
import List from "../List";
import Todo from "../Todo";

const Header = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete a Javascript Course",
      completed: false,
    },
  ]);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  const handleCompleted = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  return (
    <header>
      <div id={props.theme} className="header_Cont">
        <div className="header_top">
          <div className="header_Todo_Cont">
            <h1 className="header_title">TODO</h1>
          </div>
          <div className="header_themeButton_Cont">
            <button
              className={`header_themeButton ${props.theme}`}
              onClick={() => props.setTheme(props.theme === "sun" ? "moon" : "sun")}>
              <img src={`/public/icon-${props.theme}.svg`} alt="" />
            </button>
          </div>
        </div>
        <div className="header_bottom">
          <ListInput addTodo={addTodo} />
          <List todos={todos} handleCompleted={handleCompleted} handleDelete={handleDelete}></List>
        </div>
      </div>
    </header>
  );
};

export default Header;

/* <div className="">
            <div className="">
                <span className=""></span>
            </div>
            <input
                className=""
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => handleAddTodo(e)}
                placeholder="What's next..."
            />
        </div>
    ) */
