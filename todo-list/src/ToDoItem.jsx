export const ToDoItem = ({ text, id, completed, onRemove, onComplete }) => {
  return (
    <div className={`todo-item ${completed ? "todo-item--completed" : ""}`}>
      <div className="todo-item__content">
        <h3 className="todo-item__text">{text}</h3>
        {completed && <span className="todo-item__badge">Done</span>}
      </div>

      <div className="todo-item__actions">
        <button
          onClick={() => onComplete(id)}
          className="btn btn-secondary"
        >
          {completed ? "Cancel" : "Complete"}
        </button>
        <button
          onClick={() => onRemove(id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
