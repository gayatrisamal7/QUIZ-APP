import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup_container'>
        <h1>Sign Up</h1>
        <div className='loginsignup_fields'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Enter Password'/>
          <input type="password" placeholder='Confirm Password'/>

        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span>Login Here</span></p>
       
        </div>
    </div>
  );
};

export default Signup;
