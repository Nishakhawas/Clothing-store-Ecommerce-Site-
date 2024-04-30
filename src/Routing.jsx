import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ShopCategory from './pages/ShopCategory'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Login from './Login/Login'
import Cart from './pages/Cart'
import Footer from './components/Footer/Footer'




export default function Routing() {
  return (     
    <> 
    <Navbar/> 
   
    <Routes>
     <Route path="/" element={<Shop/>}/>  
     <Route path="/mens" element={<ShopCategory/>} />  
     <Route path="/womens" element={<ShopCategory/>} />  
     <Route path="/kids" element={<ShopCategory/>} />  
     <Route path="/product" element={Product} />  
     <Route path=":productId" element={Product} />    
     <Route path="/login" element={<Login/>} />    
     <Route path="/cart" element={<Cart/>} />  
       
     </Routes>
     <Footer/>
     </>
     
       
    
  )
}
