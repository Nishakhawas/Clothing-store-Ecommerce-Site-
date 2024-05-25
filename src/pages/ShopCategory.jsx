import React from 'react'
import './CSS/shopcategory.css'
import mens from '../components/Assets/mens4 remove.png'
import mens1 from '../components/Assets/mens1.jpg'
import mens2 from '../components/Assets/mens2.jpg'
import mens3 from '../components/Assets/mens3.jpg'
import mens5 from '../components/Assets/mens5.jpg'
import mens6 from '../components/Assets/mens6.jpg'
import mens7 from '../components/Assets/mens7.jpg'
import mens11 from '../components/Assets/mens11.jpg'
import mens12 from '../components/Assets/mens12.jpg'
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
      <div className='mens'>
        <img  src={mens} alt="" />
        </div>
        
          </div>
          <div className='category'>
          <div className='explore'>
        <img src={mens1} alt="" />
        <img src={mens2} alt="" />
        <img src={mens3}alt="" />
        <img src={mens5}alt="" />
        <div className='explore1'>
        <img src={mens6}alt="" />
        <img src={mens7}alt="" />
        <img src={mens12}alt="" />
        <img src={mens11}alt="" />
        </div>
      </div>
      </div>
     
      </>

     

    
    
  )
}
