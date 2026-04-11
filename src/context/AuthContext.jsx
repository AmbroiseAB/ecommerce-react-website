import { createContext, useContext, useState } from "react"

export const AuthContext = createContext(null);

export default function AuthProvider({children}){
  const [user,setUser] = useState(null);

  function signUp(email,password){
    const users = [];
    const newUser = {email,password}

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  }

  function login(){

  }

  return( <AuthContext.Provider value={{signUp}}>{children}</AuthContext.Provider>
)}