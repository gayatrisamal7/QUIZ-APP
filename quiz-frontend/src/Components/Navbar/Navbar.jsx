import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../Assets/Logo.jpeg';

const Navbar = () => {
    const [menu,setMenu]=useState("HOME")
  return (
    <div className='navbar'> 
    <div className="nav-logo">
      <img src={logo} alt=""/>
      <p>QUIZ</p>
    </div>

    <ul className="nav-menu">
      <li onClick={()=>{setMenu("HOME")}}><Link style={{textDecoration:'none'}} to ='/'>HOME</Link> {menu === "HOME"? <hr /> : <></> }</li>
      <li onClick={()=>{setMenu("QUIZ")}}><Link style={{textDecoration:'none'}} to='/quiz'>QUIZ</Link> {menu === "QUIZ" ? <hr /> : <></>}</li>
      
      </ul>
    <div className="nav-login-cart">
    <Link to = '/signup'><button>LOGIN</button></Link>
    
      </div>
    </div>
  );
};

export default Navbar;
