import React from 'react'
import './Menubar.css'
import { Link } from 'react-router-dom'


const Menubar = () => {

return (  
<div>
<ul className="nav-menu">
     <li><Link to="/"> HOME </Link></li>
     <li><Link to="/dashboard">MCQ</Link></li>
     <li><Link to="/quizoptions">QUIZ</Link></li>
     <li>STATS</li>
      <li><Link to ="/devquiz">DEV QUIZ</Link></li>
</ul>
</div>
  )
}

export default Menubar