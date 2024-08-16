import React from 'react'
import './Login.css'
export default function Login() {
  function validate(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password ").value;
    if(name ===""||email===""||password===""){
      alert("All fields are mandatory");
      return false;
    }
    else if (password.lenght>8||password.length<6){
      alert("The length of password should be equal to 8 digit");

    }
    else{
      alert("You are successfully login");
      return true;
    }
    
  }
  return (
   
    <div className='form'>
       <form onSubmit={validate} action="">
      <div className='loginsignup-container'>
        <h1>SIGN UP</h1>
        <div className='loginsignup-fields'>
      <input id="name" type="text"placeholder='Enter Your Name' />
      <input id="email" type="email"placeholder='Enter Your email ' />
      <input id="password" type="password"placeholder='Enter Your password' />
      <button type="submit" className='button'>CONTINUE</button>
        </div>
     
     <p className='loginsignup-login'>Already have an account?<span> Login Here</span></p>
     <div className="loginsignup-agree">
      <input type="checkbox" name="" id="" />
      <p>By continuing,i agree to the terms of use & privacy policy</p> 
     </div>
      </div>
      </form>
    </div>
   
   
  )
}
