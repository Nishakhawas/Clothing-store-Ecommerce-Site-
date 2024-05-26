import React from 'react'
import './CSS/shopwomen.css'
import women3 from '../components/Assets/women3.jpg'
export default function ShopWomen() {
  return (
      <div className='shop-category'>
      <h3>50% OFF</h3>
      <h4>SHOP NOW</h4>
      {/* <h3><span>12 </span>Hours <span>20</span> mins</h3> */}
      <div>
      <button >Explore now</button>
      </div>
      <div className='women'>
        <img  src={women3} alt="" />
        </div>
    </div>
  )
}

