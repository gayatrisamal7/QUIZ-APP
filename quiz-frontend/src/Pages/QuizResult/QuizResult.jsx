import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./QuizResult.css";

const QuizResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="quiz-result-container">
      <h1 className="quiz-result-title">🎉 Quiz Completed!</h1>
      <p className="quiz-result-score">
        You scored <span>{score}</span> out of <span>{total}</span>
      </p>

      <button className="quiz-result-btn" onClick={() => navigate("/")}>
        Back to Topics
      </button>
    </div>
  );
};

export default QuizResult;
