import React, { createContext, useState } from 'react';
import './App.css';
import Login from './components/Login';
import User from './components/User';

export const AuthContext = createContext(null);

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      <AuthContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
