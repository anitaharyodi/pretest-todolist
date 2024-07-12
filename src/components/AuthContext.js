"use client"
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isLogin: false,
  Login: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const Login = () => {
    setIsLogin(true);
  };

  return (
    <AuthContext.Provider value={{ isLogin, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error ('Error')
    } else {
        return context
    }
}
