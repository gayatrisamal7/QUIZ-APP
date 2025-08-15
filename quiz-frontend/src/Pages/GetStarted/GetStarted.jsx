// src/Pages/GetStarted/GetStarted.jsx
import React from "react";
import './GetStarted.css'
import { Link, useLocation } from "react-router-dom";
import "./GetStarted.css"; // optional, or remove if you don't need extra styles

const GetStarted = () => {
  const location = useLocation();
  const next = location.state?.next || "/";

  return (
    <div className="getstarted-container">
      <div className="getstarted-card">
        <h1>Please log in to play</h1>
        <p>You need an account to start the quiz.</p>

        <div className="getstarted-buttons">
          <Link to="/login" state={{ next }}>
            <button className="btn yellow">Login</button>
          </Link>
          <Link to="/signup" state={{ next }}>
            <button className="btn dark">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
