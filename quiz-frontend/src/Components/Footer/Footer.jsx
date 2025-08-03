import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <div className="footer-container">
      <h2 className="footer-heading">
        Let's Get Started! Try it out or <span className="underline">register to start winning prizes!</span>
      </h2>
      <div className="footer-buttons">
       <Link to="/signup"> <button className="footer-button register">Register Now</button></Link>
        <button className="footer-button try">Try it out</button>
      </div>
    </div>
  );
};

export default Footer;
