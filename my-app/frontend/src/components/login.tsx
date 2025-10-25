// Example: src/components/UserList.jsx
import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('http://localhost:8081/login')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  const loginHandler = () => {
    users.map((user: { id: number; name: string, password: string }) => {
      if (user.name === username && user.password === password) {
        console.log("joojoo");
      }
      else {
        console.log("noo");
      }
    });
  }

  return (
    <div className="login-parent">
      <div className="login-child">
        <h2>User List</h2>
        <ul>
          {users.map((user: { id: number; name: string, password: string }) => (
            <li key={user.id}>{user.name} - {user.password}</li>
          ))}
        </ul>
        <form className="login-form">
          <input onChange={e => setUsername(e.target.value)} type="text" placeholder="Name" value={username} required />
          <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" value={password} required />
          <button type="button" onClick={loginHandler}>Login</button>
        </form>
      </div>
      <hr />
    </div>
  );
}

export default UserList;