import React from 'react'
import'./Prizes.css'
import trophyImage from '../Assets/image_tropy.png'
import { Link } from 'react-router-dom'


const Prizes = () => {
  return (
    <section className="prizes-section">
      <div className="prizes-image-container">
        <img src={trophyImage} alt="Trophy" className="trophy-image" />
        <div className="yellow-circle large"></div>
        <div className="yellow-circle small"></div>
      </div>

      <div className="prizes-content">
       <h2>Prizes</h2>
        <p>Your points are added to our Leaderboard.</p>
        <p>
          In the event of a tie, the system will calculate which tied user has
          the better overall All Time correct average.
        </p>
        <p>
          At the end of the month or week{' '}
          <span className="highlight"><Link to="/quizprizes">prizes</Link></span> will be awarded.
        </p>
      </div>
    </section>
  )
}

export default Prizes
