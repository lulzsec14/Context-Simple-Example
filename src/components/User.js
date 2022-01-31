import React, { useContext } from 'react';
import { AuthContext } from '../App';

const User = () => {
  const { username } = useContext(AuthContext);

  return <div>Logged In User: {username}</div>;
};

export default User;
