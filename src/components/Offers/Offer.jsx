import React from 'react'
import './offer.css'
import hero from '../Assets/hero.png'
export default function Offer() {
  return (
    <div className='offer'>
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1> OffersForYou</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check Now</button>
        </div>
      <div className="offers-right">
        <img src={hero} alt="" />
        
      </div>
    </div>
  )
}
