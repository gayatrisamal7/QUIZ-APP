import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizContextProvider, { QuizContext } from "../../Context/QuizContext" // <-- use context
import "./QuizCategory.css";

const QuizCategory = (props) => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const { all_quiz } = useContext(QuizContext); // <-- read from provider

  const [page, setPage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const quizData = all_quiz.find(
    (q) => q.type.toLowerCase() === topic.toLowerCase()
  );

  if (!quizData) {
    return (
      <div className="quiz-category-menu">
        <h2>No Quiz Found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const questionsPerPage = 2;
  const startIndex = page * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = quizData.questions.slice(startIndex, endIndex);

  const totalPages = Math.ceil(quizData.questions.length / questionsPerPage);

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [startIndex + questionIndex]: option,
    });
  };

  const handleFinishQuiz = () => {
    let score = 0;
    quizData.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) {
        score++;
      }
    });

    navigate("/result", {
      state: { score, total: quizData.questions.length },
    });
  };

  return (
    <div className="quiz-category-container">
      <h2 className="quiz-category-title">{quizData.type} Quiz</h2>

      {currentQuestions.map((q, index) => {
        const questionIndex = startIndex + index;
        const selected = selectedAnswers[questionIndex];

        return (
          <div key={questionIndex} className="quiz-category-question">
            <p>{questionIndex + 1}. {q.question}</p>
            <div className="quiz-category-options">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  className={`quiz-category-option-btn ${
                    selected === opt ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(index, opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      })}

      <div className="quiz-category-nav">
        <button
          className="quiz-category-btn back-btn"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          ⬅ Back
        </button>

        {page < totalPages - 1 ? (
          <button
            className="quiz-category-btn next-btn"
            onClick={() => setPage(page + 1)}
          >
            Next ➡
          </button>
        ) : (
          <button
            className="quiz-category-btn finish-btn"
            onClick={handleFinishQuiz}
          >
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizCategory;




