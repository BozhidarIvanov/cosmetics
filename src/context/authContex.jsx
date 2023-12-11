// Example AuthContext setup providing isAuth and dataEmail values
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [dataEmail, setDataEmail] = useState('');

  // Your authentication logic to set isAuth and dataEmail values

  return (
    <AuthContext.Provider value={{ isAuth, dataEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
