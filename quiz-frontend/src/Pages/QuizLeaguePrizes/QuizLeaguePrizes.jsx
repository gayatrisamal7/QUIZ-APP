import React from 'react';
import './QuizLeaguePrizes.css'; // You can keep the same CSS file or rename if needed
import { Link } from 'react-router-dom';

const QuizLeaguePrizes = () => {
  return (
    <div className="quiz-leagues">
      <div className="quiz-card">
        <h2>Monthly League</h2>
        <p>
          Play the Daily Quiz each day – your points will be added to our monthly leader board and
          at the end of each month we will issue prizes to those in 1st, 2nd and 3rd place.
        </p>
        <Link to="/prizes" className="view-prizes-btn">View Prizes</Link>
      </div>

      <div className="quiz-card">
        <h2>Weekly Quiz - Compete to win a R200 voucher (1 Dec - 7 Dec)</h2>
        <p>
          Play our weekly Quiz league where you can compete against other players for prizes on a weekly basis.<br />
          Leagues will run from Sunday 00:00am to Saturday 23:39pm.
        </p>
        <Link to="/prizes" className="view-prizes-btn">View Prizes</Link>
      </div>
    </div>
  );
};

export default QuizLeaguePrizes;
