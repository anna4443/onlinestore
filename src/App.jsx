import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotalPrice } from './redux/cartSlice'

function App() {

  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalPrice())
  }, [cartItems])
  return (
       <>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
       </>
  )
}

export default App
