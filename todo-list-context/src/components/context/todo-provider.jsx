import { useEffect, useState } from "react";
import { ToDoContext } from "./todo-context";
import axios from "axios";

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    axios.get("http://localhost:4001/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  const AddTodo = (text) => {
    const newTodo = { text, completed: false };

    return axios.post("http://localhost:4001/todos", newTodo).then((res) => {
      const created = res.data;
      setTodos((prev) => [...prev, created]);
      return created;
    });
  };
  const RemoveItem = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    axios
        .delete(`http://localhost:4001/todos/${id}`)
        .then(() => {
            setTodos((prev) => prev.filter((todo) => todo.id !== id))
        })
  }

  const handleUpdate = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    axios
      .patch(`http://localhost:4001/todos/${id}`, { completed: !todo.completed })
      .then((res) => {
        const updated = res.data;
        setTodos((prev) => prev.map((todo) => (todo.id === updated.id ? updated : todo)));
      });
  };

  return (
    <ToDoContext.Provider value={{ 
        todos,
        filter,
        setFilter, 
        onUpdate: handleUpdate, 
        onAdd: AddTodo,
        onRemove: RemoveItem
    }}>

      {children}
    </ToDoContext.Provider>
  );
};
