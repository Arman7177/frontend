import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"

export const ToDoList = () => {
  const [todos,setTodos] = useState([
    {id:101, text: 'go to gym', completed: false},
    {id:102, text: 'read a book', completed: false},
    {id:103, text: 'eat a burger', completed: false},
  ])

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeItem = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="todo-wrapper">
      <h2 className="todo-title">My ToDo List</h2>

      <AddToDo onAdd={addTodo} />

      <List
        items={todos} 
        onRemove={removeItem}
        onComplete={toComplete}
      />
    </div>
  )
  
}
