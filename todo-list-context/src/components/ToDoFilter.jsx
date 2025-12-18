import { useContext } from "react";
import { ToDoContext } from "./context/todo-context";

export const ToDoFilter = () => {
  const { setFilter } = useContext(ToDoContext);

  return (
    <div className="bar">
      <button className="tab" onClick={() => setFilter("all")}>
        All
      </button>

      <button className="tab" onClick={() => setFilter("completed")}>
        Completed
      </button>

      <button className="tab" onClick={() => setFilter("pending")}>
        Pending
      </button>
    </div>
  );
};
