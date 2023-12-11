import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [dataEmail, setDataEmail] = useState('');

  const loginHandler = (email, password) => {
    // Your login logic here to authenticate the user
    // Set isAuth to true if login is successful and set dataEmail
    setIsAuth(true);
    setDataEmail(email);

    // Return whatever necessary for your application flow
    return 'Login successful';
  };

  return (
    <AuthContext.Provider value={{ isAuth, dataEmail, loginHandler }}>
      {' '}
      {/* Include loginHandler */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
