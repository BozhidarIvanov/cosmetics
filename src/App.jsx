import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import CarouselItems from './components/co/CarouselItems'

import { Footer } from './components/footer/footer'
import { Contact } from './components/contact/Contact'
import { Customer } from './components/customer/Customer'
import { About } from './components/about/About'
import { Product } from './components/product/Product'

import { Header } from './components/header/Header'
import Banner from './components/banner/Banner'

function App() {
  return (
    <div>
      {/* Comment */}
      {/* Header */}
      <Header />
      <Banner />

      {/* Banner */}

      {/* Product Section */}
      {/* ... (Product section components) */}
      <Product />
      {/* About Section */}
      <About />
      {/* ... (About section components) */}

      {/* Customer Section */}
      <Customer />
      {/* ... (Customer section components) */}

      {/* Contact Section */}
      <Contact />
      {/* ... (Contact section components) */}

      {/* Footer Section */}
      <Footer />
      {/* ... (Footer section components) */}
    </div>
  )
}

export default App
