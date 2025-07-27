import React from 'react'
import './Menubar.css'
import { Link } from 'react-router-dom'


const Menubar = () => {

return (  
<div>
<ul className="nav-menu">
     <li><Link to="/"> HOME </Link></li>
     <li><Link to="/dashboard">QUIZ</Link></li>
     <li>LOG</li>
     <li>STATS</li>
     <li>PUB QUIZ</li>
</ul>
</div>
  )
}

export default Menubar