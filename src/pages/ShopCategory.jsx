import React from 'react'
import './CSS/shopcategory.css'
import mens from '../components/Assets/mens4 remove.png'
export default function ShopCategory() {
  return (
   
    <div className='shop-category'>
      <h2>FLAT 50% OFF</h2>
      <h3><span>12 </span>Hours <span>20</span> mins</h3>
    
      <div className='shop-explore'>
        <button>Explore now</button>
      </div>
      <div className='image'>
        <img src={mens} alt="" />
      </div>
     
    </div>
    
  )
}
