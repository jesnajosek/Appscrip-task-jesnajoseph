import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'
import { Auth } from './pages/Auth'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
