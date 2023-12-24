import React, { } from "react";
  
import {
    Navigate ,
    useLocation
  } from "react-router-dom";
export const setToken = (token) =>{
    // set token in localStorage
    localStorage.setItem('Token', token)
}
export const fetchToken = (token) =>{
    // fetch the token
    return localStorage.getItem('Token')
}
export const isAuthenticated = () => {
  // Check if a valid token is present
  const token = fetchToken();
  return !!token; // Returns true if the token is present, otherwise false
}

export function RequireToken({children}) {
      
    let auth = isAuthenticated()
    let location = useLocation();
    
    if (!auth) {
        
      return <Navigate to="/login" state={{ from: location }} />;
    }
    
    return children;
}