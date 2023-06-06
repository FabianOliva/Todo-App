import "./index.css";
import { useEffect, useState } from "react";
import ListInput from "../ListInput";
import List from "../List";
import Moonbg from "../../../public/icon-moon.svg";
import Lightbg from "../../../public/icon-sun.svg";
import "../../../public/bg-desktop-dark.jpg";
import "../../../public/bg-desktop-light.jpg";

const Header = ({ theme, setTheme }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete a Javascript Course",
      completed: false,
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

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

  const handleClearComplete = () => {
    const updatedList = todos.filter((todo) => !todo.completed);
    setTodos(updatedList);
  };

  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  const handleDelete = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  return (
    <header>
      <div id={theme} className="header_Cont">
        <div className="header_top">
          <div className="header_Todo_Cont">
            <h1 className="header_title">TODO</h1>
          </div>
          <div className="header_themeButton_Cont">
            <button
              className={`header_themeButton ${theme}`}
              onClick={() => {
                if (theme === "sun") {
                  setTheme("moon");
                } else {
                  setTheme("sun");
                }
              }}>
              <img src={theme === "sun" ? Lightbg : Moonbg} alt="" />
            </button>
          </div>
        </div>
        <div className="header_bottom">
          <ListInput addTodo={addTodo} theme={theme} />
          <List
            theme={theme}
            todos={filteredTodos}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleClearComplete={handleClearComplete}></List>
        </div>
      </div>
    </header>
  );
};

export default Header;
