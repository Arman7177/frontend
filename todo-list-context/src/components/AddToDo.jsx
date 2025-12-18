import { useContext, useState } from "react";
import { ToDoContext } from "./context/todo-context";

export const AddToDo = () => {
  const [text, setText] = useState("");
  const { onAdd } = useContext(ToDoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = text.trim();
    if (!value) return;

    onAdd(value)
      .then(() => setText(""))
      .catch(console.error);
  };

  return (
    <div className="add">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write todo..."
        />

        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
