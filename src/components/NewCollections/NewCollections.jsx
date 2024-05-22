import React from 'react'
import './newcollection.css'
import model5 from '../Assets/model5.jpg'
import model4 from '../Assets/model4.jpg'
import model8 from '../Assets/model8.jpg'
import model9 from '../Assets/model9.jpg'

export default function NewCollections() {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
      <div className="collections">
      <img src={model9} alt=""/>      
      <img src={model5} alt="" />
      <img src={model8} alt="" />
      <img src={model4} alt="" />
      
      </div>
      </div>
  )
}
