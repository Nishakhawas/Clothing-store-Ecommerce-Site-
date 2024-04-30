import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <div className='form'>
      <div className='loginsignup-container'>
        <h1>SIGN UP</h1>
        <div className='loginsignup-fields'>
      <input type="text"placeholder='Enter Your Name' />
      <input type="email"placeholder='Enter Your email ' />
      <input type="password"placeholder='Enter Your password' />
      <button className='button'>CONTINUE</button>
        </div>
     
     <p className='loginsignup-login'>Already have an account?<span> Login Here</span></p>
     <div className="loginsignup-agree">
      <input type="checkbox" name="" id="" />
      <p>By continuing,i agree to the terms of use & privacy policy</p>
     </div>
      </div>
      
    </div>
  )
}
