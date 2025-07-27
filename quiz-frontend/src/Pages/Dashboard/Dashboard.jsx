import React from "react";

import "./Dashboard.css";


const Dashboard = () => {
 
  return (
    <div className="dashboard-wrapper">
    <aside className="dashboard-sidebar">
      <div className="dashboard-logo">QUIZ APP</div>
      <nav>
        <p className="dashboard-section-title">DASHBOARD</p>
        <a href="#">Create a New QUIZ</a>
        <a href="#">Contact</a>
        <p className="dashboard-section-title">RECENT QUIZ</p>
        <span className="dashboard-loading">Loading...</span>
      </nav>
      <div className="dashboard-upgrade">
        <p>Upgrade to SmartTalk-AI pro</p>
        <small>Get unlimited access to all features</small>
      </div>
    </aside>

    <main className="dashboard-main-content">
      <h1 className="dashboard-main-title">CREATE A NEW QUIZ</h1>
      <div className="dashboard-card-container">
        <div className="dashboard-card">
          <label htmlFor="upload" className="dashboard-upload-label">Upload PDF</label>
          <input type="file" id="upload" accept=".pdf" className="dashboard-file-input" />
        </div>
      </div>
    </main>
  </div>
);
};

export default Dashboard;
