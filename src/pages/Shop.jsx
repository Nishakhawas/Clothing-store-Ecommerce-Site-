import React from 'react'
import Items from '../components/Items/Items'
import Offer from '../components/Offers/Offer'
import NewCollections from '../components/NewCollections/NewCollections'
import Hero from '../components/Hero/Hero'
import NewsLetter from '../components/NewsLetter/NewsLetter'



export default function Shop() {
  return (
    <div>
       <Hero/>
       <Items/>
       <Offer/>
       <NewCollections/>
       <NewsLetter/>
       
      
      
    </div>
  )
}
