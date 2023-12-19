import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import CarouselItems from './components/co/CarouselItems';

import { Route, Router, Routes } from 'react-router-dom';

import { Footer } from './components/footer/footer';
import { Contact } from './components/contact/Contact';
import { Customer } from './components/customer/Customer';
import { About } from './components/about/About';

import { Header } from './components/header/Header';
import Banner from './components/banner/Banner';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Product from './components/product/Product';
import { AuthProvider } from './context/authContex';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const exampleProducts = [
    {
      name: 'Beauty Brush',
      price: 30,
      description: 'Lorem ipsum dolor sit amet...',
      image: 'images/img-1.png',
    },
    {
      name: 'Masscara',
      price: 10,
      description: 'Lorem ipsum dolor sit amet...',
      image: 'images/img-2.png',
    },
    {
      name: 'Lipstick',
      price: 15,
      description: 'Lorem ipsum dolor sit amet...',
      image: 'images/img-3.png',
    },
    // Add more products as needed
  ];
  return (
    <div>
      <AuthProvider>
        <CartProvider >
          <Header setSearchQuery={setSearchQuery} /> 

          <Routes>
            <Route path="/" element={<Banner />}></Route>
            <Route path="/products" element={<Product products={exampleProducts} searchQuery={searchQuery} />}>  </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/customer" element={<Customer />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>

          <Footer />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
