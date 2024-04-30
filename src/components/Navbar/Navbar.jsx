import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
export default function Navbar() {

  const [menu,setMenu]=useState("shop");

  
    
  return (
    <>
  <nav className='navbar'>
    <div className='logo'>
SHOPPER
    </div>
    <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}> <Link  style={{textDecoration:'none'}}to ='/'>Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration:'none'}}to ='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration:'none'}} to = '/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>} </li>
    </ul>
    <div className='login-cart'>
        <button onClick= {()=>{setMenu("login")}}> <Link style={{textDecoration:'none'}} to ='/login'>LOGIN</Link></button>
        <img src="" alt="" /> 
        {/* <div className='nav-count'>0</div> */}
      
    </div>
   
    


  </nav>
    </>
  )
}
