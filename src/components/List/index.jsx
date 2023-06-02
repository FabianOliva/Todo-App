import "./index.css";
import Todo from "../Todo";

const List = ({ todos, handleCompleted, handleDelete }) => {
  return (
    <div className="List">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} handleCompleted={handleCompleted} handleDelete={handleDelete} />;
      })}
      <div></div>
    </div>
  );
};

export default List;
