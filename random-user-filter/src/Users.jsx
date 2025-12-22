import { useState } from "react";
import axios from "axios";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    axios.get("http://localhost:4002/users")
      .then(res => setUsers(res.data));
  };

  const getMaleUsers = () => {
    axios.get("http://localhost:4002/users?gender=male")
      .then(res => setUsers(res.data));
  };

  const getFemaleUsers = () => {
    axios.get("http://localhost:4002/users?gender=female")
      .then(res => setUsers(res.data));
  };

  return (
    <div className="users">
      <h1 className="users-title">Users</h1>

      <div className="users-actions">
        <button className="users-btn" onClick={getAllUsers}>all</button>
        <button className="users-btn" onClick={getMaleUsers}>male</button>
        <button className="users-btn" onClick={getFemaleUsers}>female</button>
      </div>

      <div className="users-list">
        {users.map((u, i) => (
          <p className="users-item" key={i}>{u.name}</p>
        ))}
      </div>
    </div>
  );
};
