import { useState } from 'react';
import './Signup.css'
import logo from "../assets/instagram.png"
function Signup(){
    const [login,Setlogin]=useState(true);
   return(
    <div className='container'>
      <div className="user">
        <img src={logo} alt=""/>
      <input hidden={login} type="text" name="" placeholder='Mobile Number or Email' id="" />
      <input hidden={login} type="text" name="" placeholder='Full Name' id="" />
      <input type="email" name="" id="" placeholder='Phone number, username, or email'/>
      <input type="text" name="" id="" placeholder='Password' />
      <button>{(login)? "Sign up":"Sign In"}</button>
      
      <div className='footer'>
           {login? "Don't have a account":"have an account?"} <span onClick={()=>{Setlogin(!login)}}>{(login)? "Sign up":"Sign In"}</span>
      </div>
      </div>
    </div>
   )
}

export default Signup;