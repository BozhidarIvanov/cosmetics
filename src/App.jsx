import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import CarouselItems from './components/co/CarouselItems'

import { Route, Router, Routes } from 'react-router-dom'

import { Footer } from './components/footer/footer'
import { Contact } from './components/contact/Contact'
import { Customer } from './components/customer/Customer'
import { About } from './components/about/About'
import { Product } from './components/product/Product'

import { Header } from './components/header/Header'
import Banner from './components/banner/Banner'
import Login from './components/login/Login'

function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
