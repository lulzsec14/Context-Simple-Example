import React, { useContext } from 'react';
import { AuthContext } from '../App';

const Login = () => {
  const { setUsername } = useContext(AuthContext);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
