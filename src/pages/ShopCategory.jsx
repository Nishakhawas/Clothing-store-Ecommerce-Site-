import React from 'react'
import './CSS/shopcategory.css'
import mens from '../components/Assets/mens4 remove.png'
export default function ShopCategory() {
  return (
  <>
    <div className='shop-category'>
      <h3>50% OFF</h3>
      <h4>SHOP NOW</h4>
      {/* <h3><span>12 </span>Hours <span>20</span> mins</h3> */}
      <div>
      <button >Explore now</button>
      </div>
      <div>
        <img src={mens} alt="" />
        </div>
          </div>
      {/* <div className='explore'>
        <img src={mens} alt="" />
        <img src="" alt="" />
        <img src="" alt="" />

      </div> */}
      </>

     

    
    
  )
}