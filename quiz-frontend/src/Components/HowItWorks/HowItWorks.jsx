import React from 'react'
import css from './HowItWorks.css'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
  return (
    <div>
<div className="how-it-works">
      <h2>How It Works</h2>
      <p>
        We offer a wide range of quizzes for you to choose from,the more<br/>  you
        play, the better your chances of winning prizes.
      </p>
      <p>
        All Quizzes are timed and points are earned for every correct answer.
      </p>
      <p>
        Your points are added to the leaderboard, and we will<br/> award
        <a href="#prizes"><Link to="/quizprizes"> prizes!</Link></a> at the end of each month.
      </p>

      <h3>Daily Quiz</h3>
      <p>
        Play a daily quiz every day, new quizzes will start every day <br/>at
        midnight. <br />
        You can only play a daily quiz once. <br />
        Your points are added to the leaderboard.
      </p>

      <h3>Random Quiz</h3>
      <p>
        Random quizzes can be played at anytime on any day. <br />
        Playing random quizzes does not add to your score but is <br/>great practice
        for our Daily Quiz.
      </p>
    </div>

    </div>
  )
}

export default HowItWorks