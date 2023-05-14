import React, { createContext } from "react";


const AuthContext = createContext({
    isLoggedIn:false,
    setLoggedIn:()=>{}
}); 
  


export default AuthContext;