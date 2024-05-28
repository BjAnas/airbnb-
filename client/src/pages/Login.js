// Login.js

import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await login(email, password);
    if (token) {
      // Login successful, redirect or set token in local storage
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;




