import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,  Routes, Route } from "react-router-dom";

import Signup from './Pages/Signup/Signup.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Login from '../src/Pages/Login/Login.jsx';
import Menubar from './Components/Menubar/Menubar.jsx';
import Home from '../src/Pages/Home/Home.jsx';
import DevQuiz from './Pages/DevQuiz/DevQuiz.jsx';
import QuizOptions from './Components/QuizOptions/QuizOptions.jsx';
import DailyQuiz from './Pages/DailyQuiz/DailyQuiz.jsx';
import QuizCategory from './Pages/QuizCategory/QuizCategory.jsx';
import QuizResult from './Pages/QuizResult/QuizResult.jsx';
import QuizLeaguePrizes from './Pages/QuizLeaguePrizes/QuizLeaguePrizes.jsx';
import GetStarted from './Pages/GetStarted/GetStarted.jsx';

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
        <Route path="/devquiz" element={<DevQuiz />} /> 
        <Route path="quizoptions" element={<QuizOptions/>}/>
        <Route path="/dailyquiz" element ={<DailyQuiz/>}/>
        <Route path="/quiz/:topic" element={<QuizCategory />} />
        <Route path="/result" element={<QuizResult />} />
        <Route path="/quizprizes" element={<QuizLeaguePrizes />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
      
 
    </BrowserRouter>
    </div>
  );
}

export default App;
