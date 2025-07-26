import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Login from '../src/Pages/Login/Login.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Dashboard/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
