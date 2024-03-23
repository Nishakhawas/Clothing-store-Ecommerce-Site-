import React from 'react'
import './item.css'
import model1 from '../Assets/model1.png'

export default function Items() {
  return (
    <>
    <div className='item'>
        <h1>POPULAR IN WOMEN</h1>
        </div>
        <div className='image'>
      <img src={model1} alt=""/>      
      <img src={model1} alt="" />
      <img src={model1} alt="" />
      <img src={model1} alt="" />
      {/* <img src={model1} alt="" /> */}
      </div>
   
     
      
      {/* <div className='prices'>
        <div className="item-prices">
           <div className="itempricesnew">
           </div>
           <div className="item-pricesold">
           </div>
        </div>
      </div> */}
       </>
  
  )
}
