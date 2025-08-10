import React from 'react'
import'./Login.css'
import{useState} from 'react'


const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')


  return (
    <div className="login-container">
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me?</label>
        </div>

        <button type="submit" className="login-btn">Login</button>

        <a href="#" className="forgot-password">Forgot Password?</a>
      </form>
    </div>
  )
}

export default Login