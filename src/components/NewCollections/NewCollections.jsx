import React from 'react'
import './newcollection.css'


import dress8 from '../Assets/dress8.jpg'

import dress12 from '../Assets/dress12.webp'
import dress13 from '../Assets/dress13.jpg'
import dress10 from '../Assets/dress10.jpg'

import dress14 from '../Assets/dress14.webp'
import dress15 from '../Assets/dress15.webp'

export default function NewCollections() {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
      <div className="collections">
      <img src={dress8} alt=""/>      
      <img src={dress12} alt="" />
      <img src={dress10} alt="" />
      <img src={dress13} alt="" />
      <img src={dress15} alt="" />
      <img src={dress14} alt="" />
      
      </div>
      </div>
  )
}
