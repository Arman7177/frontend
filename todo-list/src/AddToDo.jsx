import { useState } from "react";

export const AddToDo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!text.trim()) {
      return setError("Please enter todo");
    }

    setError("");
    onAdd(text.trim());
    setText("");
  };

  return (
    <div className="add-todo">
      <h3 className="add-todo__title">Add ToDo</h3>

      {error && <p className="error-text">{error}</p>}

      <form onSubmit={handleSubmit} className="add-todo__form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your todo..."
          className="add-todo__input"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};
