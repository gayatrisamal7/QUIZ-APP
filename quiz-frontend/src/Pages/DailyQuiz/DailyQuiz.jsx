import React from 'react'
import'./DailyQuiz.css'
import { useState } from 'react';



const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Madrid", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Picasso", "Da Vinci", "Van Gogh", "Rembrandt"],
    answer: "Da Vinci",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    answer: "Blue Whale",
  },
  {
    question: "Which is the fastest land animal?",
    options: ["Tiger", "Cheetah", "Leopard", "Horse"],
    answer: "Cheetah",
  },
  {
    question: "Who discovered gravity?",
    options: ["Einstein", "Newton", "Galileo", "Tesla"],
    answer: "Newton",
  },
  {
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "Which is the national sport of Japan?",
    options: ["Sumo", "Karate", "Judo", "Kendo"],
    answer: "Sumo",
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Ganga", "Mississippi"],
    answer: "Nile",
  },
];

const DailyQuiz = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const questionsPerPage = 2;

  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [startIndex + questionIndex]: option,
    });
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(questions.length / questionsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="quiz-page">
      <h1 className="quiz-header">Daily Quiz</h1>
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
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(questions.length / questionsPerPage) - 1}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default DailyQuiz;