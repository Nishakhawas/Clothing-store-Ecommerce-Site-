import React from 'react'
import './newcollection.css'
import model1 from '../Assets/model1.png'

export default function NewCollections() {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
      <div className="collections">
      <img src={model1} alt=""/>      
      <img src={model1} alt="" />
      <img src={model1} alt="" />
      <img src={model1} alt="" />
      </div>
      </div>
  )
}
