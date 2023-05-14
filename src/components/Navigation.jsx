import React,{useContext} from 'react';
import Dashboard from "./Dashboard";
import AuthContext from '../context/AuthContext';
import Login from "./Login";

const Navigation = () => {
    const auth = useContext(AuthContext);
  return (
    <div>
       {auth.isLoggedIn && <Dashboard/>}
        {!auth.isLoggedIn && <Login/>}
    </div>
  )
}

export default Navigation;