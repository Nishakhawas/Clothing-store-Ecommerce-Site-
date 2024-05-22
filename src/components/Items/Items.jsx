import React from 'react'
import './item.css'
import model1 from '../Assets/model1.png'
import model2 from '../Assets/model2.jpg'
import model3 from '../Assets/model3.jpg'
import model7 from '../Assets/model7.jpg'
import model6 from '../Assets/model6.jpg'

export default function Items() {
  return (
    <>
    <div className='item'>
        <h1>POPULAR IN WOMEN</h1>
        </div>
        <div className='image'>
      <img src={model1} alt=""/> 
      <img src={model3} alt="" />     
      <img src={model2} alt="" />
      <img src={model6} alt="" />
      <img src={model7} alt="" />
      
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
