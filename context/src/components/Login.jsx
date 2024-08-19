import React, { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../context/userContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const{setUser} = useContext(UserContext)

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUser({username,password})
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <h1>Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div>
        <h1>Password</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button type="submit" onClick={handleOnSubmit}>Submit</button>
    </form>
  );
}

export default Login;
