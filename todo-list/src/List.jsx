import { ToDoItem } from "./ToDoItem"

export const List = ({ items, onRemove, onComplete }) => {
  return (
    <div className="todo-list">
      <p className="todo-list__counter">{items.length} Todos</p>
      {items.length === 0 && (
        <p className="todo-list__empty">No todos yet. Add something ✨</p>
      )}
      {items.map(item => (
        <ToDoItem
          key={item.id}
          onRemove={onRemove}
          onComplete={onComplete}
          {...item}
        />
      ))}
    </div>
  )
}
