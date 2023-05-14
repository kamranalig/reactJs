import React, { useState } from 'react';
import './App.css';
import AuthContext from './context/AuthContext';
import Navigation from './components/Navigation';

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <div className="App">
      <AuthContext.Provider value={{
        isLoggedIn:auth,
        setLoggedIn:(value)=>{
          setAuth(value);
        }
      }}>     
      <Navigation/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
