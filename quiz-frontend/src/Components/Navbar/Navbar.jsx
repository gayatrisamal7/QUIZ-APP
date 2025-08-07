import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import new_quiz from '../Assets/new_quiz.jpeg';


const Navbar = () => {
  
  return (
   
    <div className='navbar'> 
    
    <div className="navbar-logo">
     <Link to="/"> <img src={new_quiz} alt= ""/></Link>
      
    </div>

   
    <div className="navbar-buttons">
        <Link to="/signup"><button className="btn dark">Sign Up</button></Link>
      <Link to="/login"> <button className="btn yellow">Login</button></Link>
      </div>
      </div>
      
      
    
  );
};

export default Navbar;
