import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [companyId, setCompanyId] = useState(1);
  return (
    <AuthContext.Provider
      value={{ email, setEmail, user, setUser, companyId, setCompanyId }}
    >
      {children}
    </AuthContext.Provider>
  );
};
