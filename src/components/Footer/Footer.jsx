import React from 'react'
import './footer.css'
import { FaPinterest ,FaInstagramSquare,FaShopify} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>  
    <h2><FaShopify className='footer-logo'/>SHOPPER</h2>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

         <div className="logo">
         <FaPinterest className='logo1'/>
         < FaInstagramSquare  className='logo2' />
           
            <FaWhatsapp className='logo3'/> 
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright  @ 2024 - All Right Reserved.</p>
        </div>
       
      
    </div>
  )
}
