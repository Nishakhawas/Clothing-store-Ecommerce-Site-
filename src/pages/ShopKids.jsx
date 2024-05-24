import React from 'react'
import './CSS/shopkids.css'
import kid1 from "../components/Assets/kids1.jpg"

export default function ShopKids() {
  return (
   
      <div className='shop-category'>
      <h3>50% OFF</h3>
      <h4>SHOP NOW</h4>

      <div>
      <button >Explore now</button>
      </div>
      <div className='kids'>
        <img  src={kid1} alt="" />
        </div>
    </div>
  )
}
