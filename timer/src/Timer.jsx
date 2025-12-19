import { useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [duplicates, setDuplicates] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  const start = () => {
    if (intervalId) return;

    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(id);
          setIntervalId(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setIntervalId(id);
  };

  const pause = () => {
    if (!intervalId) return;
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const duplicate = () => {
    setDuplicates([...duplicates, timer]);
  };

  const deleteAll = () => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
    setTimer(0);
    setDuplicates([]);
  };

  return (
    <div className="timer">
      <h1 className="title">Timer</h1>

      <input
        className="input"
        type="number"
        value={timer}
        onChange={(e) => setTimer(e.target.value)}
      />

      <div className="buttons">
        <button className="btn" onClick={start}>Start</button>
        <button className="btn" onClick={pause}>Pause</button>
        <button className="btn" onClick={start}>Continue</button>
        <button className="btn" onClick={duplicate}>Duplicate</button>
        <button className="btn delete" onClick={deleteAll}>Delete</button>
      </div>

      <h3 className="subtitle">Duplicates</h3>

      {duplicates.length === 0 ? (
        <p className="empty">No duplicates</p>
      ) : (
        <ul className="list">
          {duplicates.map((x, i) => (
            <li className="item" key={i}>{x}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
