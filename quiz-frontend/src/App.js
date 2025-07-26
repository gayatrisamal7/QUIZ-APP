import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,  Routes, Route } from "react-router-dom";

import Signup from './Pages/Signup/Signup.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Login from '../src/Pages/Login/Login.jsx';
import Menubar from './Components/Menubar/Menubar.jsx';
import Home from '../src/Pages/Home/Home.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Menubar/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
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
