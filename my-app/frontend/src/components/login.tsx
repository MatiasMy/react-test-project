import React, { useState } from 'react';

const Login = ({ loginHandler = (info: { name: string; password: string }) => { } }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-parent">
      <div className="login-child">
        <h2>Login</h2>
        <form className="login-form" onSubmit={e => { e.preventDefault(); loginHandler({ name, password }); }}>
          <input onChange={e => setName(e.target.value)} type="text" placeholder="Name" value={name} required />
          <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" value={password} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;