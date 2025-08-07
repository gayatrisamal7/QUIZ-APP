import React, { useState } from 'react';
import './DailyQuiz.css';
import daily_quiz from "../../Components/Assets/play_quiz";

const DailyQuiz = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);

  const questionsPerPage = 2;
  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = daily_quiz.slice(startIndex, endIndex);

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [startIndex + questionIndex]: option,
    });
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(daily_quiz.length / questionsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    daily_quiz.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="quiz-page">
      <h1 className="quiz-header">Daily Quiz</h1>

      {!showScore ? (
        <>
          {currentQuestions.map((q, index) => (
            <div key={index} className="quiz-question">
              <h2>{q.question}</h2>
              <div className="options">
                {q.options.map((option, i) => (
                  <button
                    key={i}
                    className={`option-btn ${
                      selectedAnswers[startIndex + index] === option ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick(index, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="quiz-navigation">
            <button onClick={prevPage} disabled={currentPage === 0}>
              ⬅ Back
            </button>

            {currentPage === Math.ceil(daily_quiz.length / questionsPerPage) - 1 ? (
              <button onClick={() => setShowScore(true)}>
                Show Score 🏁
              </button>
            ) : (
              <button onClick={nextPage}>
                Next ➡
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="score-section">
          <h2>Your Score: {calculateScore()} / {daily_quiz.length}</h2>
        </div>
      )}
    </div>
  );
};

export default DailyQuiz;
