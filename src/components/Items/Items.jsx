import React from 'react'
import './item.css'
import dress5 from '../Assets/dress5.webp'
import dress7 from '../Assets/dress7.jpg'
import dress6 from '../Assets/dress6.avif'
import dress1 from '../Assets/dress1.webp'
import dress3 from '../Assets/dress3.webp'
import dress4 from '../Assets/dress4.png'

export default function Items() {
  return (
    <>
    <div className='item'>
        <h1>POPULAR IN WOMEN</h1>
        </div>
        <div className='image'>
      <img src={dress5} alt=""/> 
      <img src={dress4} alt=""/> 
      <img src={dress6} alt="" />     
      <img src={dress7} alt="" />
      <img src={dress3} alt="" />
      <img src={dress1} alt="" />
      
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
