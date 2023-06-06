import "./index.css";
import Todo from "../Todo";
import "../../../public/bg-desktop-dark.jpg";
import "../../../public/bg-desktop-light.jpg";

const List = ({
  theme,
  todos,
  handleCompleted,
  handleDelete,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearComplete,
}) => {
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const itemCount = incompleteTodos.length;

  return (
    <div
      className="List"
      style={{
        backgroundColor: theme === "sun" ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)",
        color: theme === "sun" ? "hsl(235, 21%, 11%)" : "rgba(255, 255, 255, 0.87)",
      }}>
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} handleCompleted={handleCompleted} handleDelete={handleDelete} theme={theme} />
        );
      })}
      <div className="List_Filters">
        <span className="List_Filters_Left">{`${itemCount} Items left`}</span>
        <ul className="List_Filters_Filter">
          <li className="List_Filters_Filter-Item" onClick={showAllTodos}>
            All
          </li>
          <li className="List_Filters_Filter-Item" onClick={showActiveTodos}>
            Active
          </li>
          <li className="List_Filters_Filter-Item" onClick={showCompletedTodos}>
            Completed
          </li>
        </ul>
        <a className="List_Filters_Clear" onClick={() => handleClearComplete()}>
          Clear Completed
        </a>
      </div>
    </div>
  );
};

export default List;
