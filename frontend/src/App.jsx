import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/placeOrder/PlaceOrder'

const App = () => {
  return (
    <div>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/cart' element={ <Cart />} />
          <Route path='/order' element={ <PlaceOrder />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
