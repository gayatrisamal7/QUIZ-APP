import React from 'react'
import './DevQuiz.css'

const DevQuiz = () => {
    const topics = ["Java", "JavaScript", "Python", "MySQL", "PostgreSQL", "React"];
  return (
    <div>
         <div className="devquiz-container">
      <h1 className="devquiz-title">Choose Your Quiz Topic</h1>
      <div className="quiz-options">
        {topics.map((topic, index) => (
          <div key={index} className="quiz-card">
            <h2>{topic}</h2>
            <button className="start-btn">Start Quiz</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default DevQuiz