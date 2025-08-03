import React from "react";
import './Home.css'

import Item from "../../Components/Item/Item";
import QuizOptions from "../../Components/QuizOptions/QuizOptions";
import Prizes from "../../Components/Prizes/Prizes";
import Offers from "../../Components/Offers/Offers";
import Footer from "../../Components/Footer/Footer";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";


const Home = () => {
  return (
    <div>
      <QuizOptions/>
      <HowItWorks/>
      <Item/>
     
      <Prizes/>
      <Offers/>
      <Footer/>
   
    </div>
  )
};

export default Home;
