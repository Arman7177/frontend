import { ToDoList } from "./components/ToDoList";
import { ToDoProvider } from "./components/context/todo-provider";

export default function App() {
  return (
    <div className="app">
      <ToDoProvider>
        <ToDoList />
      </ToDoProvider>
    </div>
  );
}
