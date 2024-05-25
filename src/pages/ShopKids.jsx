import React from 'react'
import './CSS/shopkids.css'
// import kid1 from "../components/Assets/kids1.jpg"
import kid2 from "../components/Assets/kids2.jpg"

export default function ShopKids() {
  return (
   
      <div className='shop-category'>
      <h3>50% OFF</h3>
      <h4>SHOP NOW</h4>

      <div>
      <button >Explore now</button>
      </div>
      <div className='kids'>
        <img  src={kid2} alt="" />
        </div>
    </div>
  )
}
