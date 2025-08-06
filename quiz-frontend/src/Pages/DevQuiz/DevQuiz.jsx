import React from 'react'
import './DevQuiz.css'
import { useNavigate } from "react-router-dom";

const DevQuiz = () => {
    const topics = ["Java", "JavaScript", "Python", "MySQL", "PostgreSQL", "React"];
    const navigate = useNavigate();
  return (
    <div>
         <div className="devquiz-container">
      <h1 className="devquiz-title">Choose Your Quiz Topic</h1>
      <div className="quiz-options">
        {topics.map((topic, index) => (
          <div key={index} className="quiz-card">
            <h2>{topic}</h2>
            <button className="start-btn"
            onClick={() => navigate(`/quiz/${topic}`)}>Start Quiz</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default DevQuiz