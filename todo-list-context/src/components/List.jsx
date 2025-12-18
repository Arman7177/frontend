import { useContext } from "react";
import { ToDoContext } from "./context/todo-context";
import { ToDoItem } from "./ToDoItem";

export const List = () => {
  const { todos, filter } = useContext(ToDoContext);

  const shown = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="list">
      <h2 className="head">List {shown.length}</h2>

      <div className="grid">
        {shown.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
