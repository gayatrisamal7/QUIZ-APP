import React from 'react'
import'./Login.css'
import{useState} from 'react'

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')


  return (
    <div className="login">

    <div className='logins_container'>
         <h1>LOGIN</h1>

     <div className="login-fields">
        <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
         />

        <input
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         />

          </div>
         <button type='submit'>CONTINUE</button>

         </div>
    </div>
  )
}

export default Login