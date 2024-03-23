import React from 'react'
import './hero.css'
import hero from '../Assets/hero.png'



export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">          
<h2>NEW ARRIVALS ONLY</h2>
         <p>new...</p>          
    <p>collections</p>
    <p> for everyone</p>

<div className="hero-latest-button">
    <div>latest collection +</div>
</div>
        </div>
        <div>
        <img src={hero} alt="" />
        </div>
    </div>
  )
}
