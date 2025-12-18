import { useContext } from "react";
import { ToDoContext } from "./context/todo-context";

export const ToDoItem = ({ todo }) => {
  const { onUpdate, onRemove } = useContext(ToDoContext);

  return (
    <div className={`item ${todo.completed ? "done" : ""}`}>
      <p className="text">{todo.text}</p>

      <div className="actions">
        <button className="btn" onClick={() => onUpdate(todo.id)}>
          {todo.completed ? "cancel" : "completed"}
        </button>

        <button className="btn" onClick={() => onRemove(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
