import React, { useState, useContext, useMemo } from "react";
import "./DailyQuiz.css";
import { QuizContext } from "../../Context/QuizContext"; // <-- use context

const DailyQuiz = () => {
  // Ensure this component is wrapped by <QuizContextProvider>
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("DailyQuiz must be used within QuizContextProvider");
  const { play_quiz = [] } = ctx; // <-- get play_quiz from context

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);

  const questionsPerPage = 2;
  const totalPages = Math.ceil(play_quiz.length / questionsPerPage);

  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;

  const currentQuestions = useMemo(
    () => play_quiz.slice(startIndex, endIndex),
    [play_quiz, startIndex, endIndex]
  );

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [startIndex + questionIndex]: option,
    }));
  };

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const calculateScore = () => {
    let score = 0;
    play_quiz.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) score += 1;
    });
    return score;
  };

  if (!Array.isArray(play_quiz) || play_quiz.length === 0) {
    return (
      <div className="quiz-page">
        <h1 className="quiz-header">Daily Quiz</h1>
        <p>No questions available.</p>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <h1 className="quiz-header">Daily Quiz</h1>

      {!showScore ? (
        <>
          {currentQuestions.map((q, index) => (
            <div key={startIndex + index} className="quiz-question">
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

            {currentPage === totalPages - 1 ? (
              <button onClick={() => setShowScore(true)}>Show Score 🏁</button>
            ) : (
              <button onClick={nextPage}>Next ➡</button>
            )}
          </div>
        </>
      ) : (
        <div className="score-section">
          <h2>Your Score: {calculateScore()} / {play_quiz.length}</h2>
        </div>
      )}
    </div>
  );
};

export default DailyQuiz;
