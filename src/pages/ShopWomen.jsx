import React from 'react'
import './CSS/shopwomen.css'
import women3 from '../components/Assets/women3.jpg'
import women1 from '../components/Assets/women1.jpg'
import women2 from '../components/Assets/women2.jpg'
export default function ShopWomen() {
  return (
    <>
      <div className='shop-category'>
      <h3>50% OFF</h3>
      <h4>SHOP NOW</h4>
      {/* <h3><span>12 </span>Hours <span>20</span> mins</h3> */}
      <div>
      <button >Explore now</button>
      </div>
      <div className='women'>
        <img  src={women2} alt="" />
        </div>
    </div>
    <div className='category2'>
    <div className='explore3'>
  <img src={women1} alt="" />
  <img src={women2} alt="" />
  <img src={women1} alt="" />
  <img src={women2} alt="" />
  <div className='explore4'>
  <img src={women1} alt="" />
  <img src={women2} alt="" />
  <img src={women1} alt="" />
  <img src={women2} alt="" />
  

   </div>
  </div>
  </div>
  

  </>
  )
 
}

