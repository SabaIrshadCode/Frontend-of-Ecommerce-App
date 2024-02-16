import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/Layout';
import Home from './pages/Home';

import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
       
        <Route path='contact' element={<Contact />} />
        <Route path='product' element={<OurStore />} />
        <Route path='product/:id' element={<SingleProduct />} />
        <Route path='cart' element={<Cart />} />
        <Route path='blogs' element={<Blog />} />
        <Route path='compare-product' element={<CompareProduct />} />
        <Route path='wishlist' element={<Wishlist />} />
        <Route path='login' element={<Login />} />
        <Route path='forgot-password' element={<Forgotpassword />} />
        <Route path='signup' element={<Signup />} />
        <Route path='reset-password' element={<Resetpassword />} />
        <Route path='checkout' element={<Checkout />} />
        
       </Route>
    </Routes>
    </BrowserRouter>
  </>

  )
  }

export default App;
