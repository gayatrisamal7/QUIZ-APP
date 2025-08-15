// src/Pages/DevQuiz/DevQuiz.jsx
import React, { useEffect, useState } from "react";
import "./DevQuiz.css";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const DevQuiz = () => {
  const topics = ["Java", "JavaScript", "Python", "MySQL", "PostgreSQL", "React"];
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u || null));
    return unsub;
  }, []);

  const handleStart = (topic) => {
    if (!user) {
      // send to the “Login / Sign Up” page
      navigate("/get-started", { state: { next: `/quiz/${topic}` } });
    } else {
      navigate(`/quiz/${topic}`);
    }
  };

  return (
    <div>
      <div className="devquiz-container">
        <h1 className="devquiz-title">Choose Your Quiz Topic</h1>
        <div className="quiz-options">
          {topics.map((topic, index) => (
            <div key={index} className="quiz-card">
              <h2>{topic}</h2>
              <button
                className="start-btn"
                onClick={() => handleStart(topic)}
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevQuiz;
