import { AddToDo } from "./AddToDo";
import { ToDoFilter } from "./ToDoFilter";
import { List } from "./List";

export const ToDoList = () => {
  return (
    <div className="page">
      <h1 className="title">To Do List</h1>

      <div className="panel">
        <AddToDo />
        <ToDoFilter />
      </div>

      <List />
    </div>
  );
};
