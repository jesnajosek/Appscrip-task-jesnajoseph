import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'
import Auth from './pages/Auth'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AuthProvider from './context/AuthContext'
import CartProvider from './context/CartContext'

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
