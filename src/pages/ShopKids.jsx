import React from 'react'
import './CSS/shopkids.css'
import kid1 from "../components/Assets/kids1.jpg"
import kid2 from "../components/Assets/kids2.jpg"
import kid5 from "../components/Assets/kids5.jpg"
import kid4 from "../components/Assets/kids4.jpg"
import kid6 from "../components/Assets/kids6.jpg"
// import kid3 from "../components/Assets/kids3.jpg"

export default function ShopKids() {
  return (
   <>
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
     <div className='category1'>
     <div className='explore1'>
   <img src={kid1} alt="" />
   <img src={kid6} alt="" />
   <img src={kid4} alt="" />
   <img src={kid5} alt="" />
   <div className='explore2'>
   <img src={kid1} alt="" />
   <img src={kid6} alt="" />
   <img src={kid4} alt="" />
   <img src={kid5} alt="" />
   
   </div>
   </div>
   </div>
   </>
  )
}
