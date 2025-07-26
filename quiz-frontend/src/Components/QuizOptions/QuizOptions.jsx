import React from 'react'
import './QuizOptions.css'

const QuizOptions = () => {
  return (
    <div className="quiz-container">
    <div className="quiz-section">
      <h1 className="quiz-title">DAILY QUIZ</h1>
      <p className="quiz-description">
        Play the Daily Quiz, earn points and<br />compete for prizes
      </p>
      <button className="quiz-button">🏆 PLAY!</button>
    </div>

    <div className="quiz-section">
      <h1 className="quiz-title">JUST FOR FUN QUIZ</h1>
      <p className="quiz-description">
        Choose from a variety of just for fun<br />quizzes
      </p>
      <button className="quiz-button">PLAY FOR FUN!</button>
    </div>
  </div>
  )
}

export default QuizOptions