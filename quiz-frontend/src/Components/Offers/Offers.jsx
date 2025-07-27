import React from 'react'
import'./Offers.css'

const Offers = () => {
  return (
    <div className='newsletter'>
    <h1>Get Exclusive Offers on your Email</h1>
    <p>Subscribe to our NewsLetter and stay Updated</p>
    <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
    </div>

    </div>
  )
}

export default Offers