import React from 'react'
import './Menubar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Menubar = () => {
  const[menu,setMenu]=useState("HOME")

return (  
<div>
<ul className="nav-menu">
     <li onClick={()=>setMenu("HOME")}><Link style={{textDecoration:'none'}} to="/"> HOME </Link>{menu==="HOME"?<hr/>:<></>}</li>
     <li onClick={()=>setMenu("mcq")}><Link style={{textDecoration:'none'}} to="/dashboard">MCQ</Link>{menu==="mcq"?<hr/>:<></>}</li>
     <li onClick={()=>setMenu("quiz")}><Link style={{textDecoration:'none'}} to="/quizoptions">QUIZ</Link>{menu==="quiz"?<hr/>:<></>}</li>
     <li>STATS</li>
      <li onClick={()=>setMenu("devquiz")}><Link style={{textDecoration:'none'}} to ="/devquiz">DEV QUIZ</Link>{menu==="devquiz"?<hr/>:<></>}</li>
</ul>
</div>
  )
}

export default Menubar