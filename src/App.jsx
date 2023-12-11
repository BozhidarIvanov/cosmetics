import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Contact } from './components/contact/Contact';
import { Customer } from './components/customer/Customer';
import { About } from './components/about/About';
import Product from './components/product/Product';

import { Header } from './components/header/Header';
import Banner from './components/banner/Banner';
import Login from './components/login/Login';
import AuthContext from './context/authContex';
import { useNavigate } from 'react-router-dom';
import loginRequest from './service/loginRequest';
import { CartProvider } from './context/CartContext';

function App() {
  let [isAuth, setIsAuth] = useState(false);
  const [dataEmail, setDataEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth && dataEmail) {
      // Ensure both conditions are met for successful login
      navigate('/');
    }
  }, [isAuth]);

  const loginHandler = async (email, password) => {
    const response = await loginRequest(email, password);
    const data = await response.json();
    setDataEmail(data.email);
    setIsAuth(!!data.accessToken);
  };

  const contextValue = {
    loginHandler,
    isAuth,
    dataEmail,
  };

  return (
    <div>
      <AuthContext.Provider value={contextValue}>
        <CartProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Banner />}></Route>
            <Route path="/products" element={<Product />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/customer" element={<Customer />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>

          <Footer />
        </CartProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
