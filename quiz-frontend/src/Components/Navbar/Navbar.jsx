import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import new_quiz from '../Assets/new_quiz.jpeg';


const Navbar = () => {
    const [menu,setMenu]=useState("HOME")
  return (
    <div className='navbar'> 
    <div className="nav-logo">
     <Link to="/"> <img src={new_quiz} alt=""/></Link>
      <p>QUIZ</p>
    </div>

    <ul className="nav-menu">
      <li onClick={()=>{setMenu("HOME")}}><Link style={{textDecoration:'none'}} to ='/'>HOME</Link> {menu === "HOME"? <hr /> : <></> }</li>
      <li onClick={()=>{setMenu("QUIZ")}}><Link style={{textDecoration:'none'}} to='/quiz'>QUIZ</Link> {menu === "QUIZ" ? <hr /> : <></>}</li>
      
      </ul>
    <div className="nav-right">
      <div className="nav-right-signup">
    <Link to = '/signup'><button>SIGNUP</button></Link>
    </div>
    <div className="nav-right-login">
    <Link to = '/login'><button>LOGIN</button></Link>
    </div>
      </div>
    </div>
  );
};

export default Navbar;
